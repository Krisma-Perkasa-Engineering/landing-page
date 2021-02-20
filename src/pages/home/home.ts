import {
  LitElement,
  html,
  customElement,
  property,
  internalProperty,
  css,
} from 'lit-element';
import {styleMap} from 'lit-html/directives/style-map';

import '../../components/header/header.ts';
import '../../components/footer/footer.ts';
import '../../components/carousel/carousel.ts';
import '../../components/content/content.ts';
import './about-us.ts';
import './our-product.ts';
import './contact-us.ts';

import {Images} from '../../components/carousel/types';
import {ScreenSize} from '../../components/types';
import {setMetaTags, onSeoUpdated} from '../../helpers/seo/seo';
import {CustomWindow} from '../../helpers/seo/types';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

import logo1 from '../../assets/images/carousel/banner-pump-1.jpg';
import logo2 from '../../assets/images/carousel/banner-pump-2.jpg';
import logo3 from '../../assets/images/carousel/banner-pump-3.jpg';

@customElement('kpe-home')
export class Home extends LitElement {
  @property({type: Object})
  window: CustomWindow = window;

  @property({type: Object})
  document: Document = document;

  @internalProperty()
  screenSize: ScreenSize = {
    width: this.document.documentElement.clientWidth,
    height:
      this.document.documentElement.clientWidth > 1024
        ? this.document.documentElement.clientHeight - 112
        : this.document.documentElement.clientHeight - 56,
  };

  static get styles() {
    return css`
      carousel-images {
        display: block;
      }
    `;
  }

  render() {
    const images: Array<Images> = [
      {
        title: 'Ringankan beban Anda dengan konsultasi pada ahlinya',
        path: logo1,
        alt: 'Pabrik kimia',
      },
      {
        title: 'Perkuat bisnis anda dengan produk berkualitas',
        path: logo2,
        alt: 'Pompa industri',
      },
      {
        title:
          'Hilangkan kekhawatiran anda dengan layanan purna jual yang profesional',
        path: logo3,
        alt: 'Berbagai jenis pompa',
      },
    ];

    return html`
      <div>
        <kpe-header></kpe-header>
        <carousel-images
          style=${styleMap({
            width: `${String(this.screenSize.width)}px`,
            height: `${String(this.screenSize.height)}px`,
          })}
          .images="${images}"
          .screenSize="${this.screenSize}"
        ></carousel-images>
        <content-container .screenSize="${this.screenSize}">
          <main>
            <about-us></about-us>
            <our-product></our-product>
            <contact-us></contact-us>
          </main>
          <kpe-footer></kpe-footer>
        </content-container>
      </div>
    `;
  }

  /**
   * This will fetch SEO metadata for current page
   */
  fetchPageSeo(slug: string, pageUrl: string, onUpdated: typeof onSeoUpdated) {
    fetchPageSeoAction(slug)
      .then((pageSeo: PageSeo) => {
        setMetaTags(pageSeo.title, pageSeo.description, pageUrl);
      })
      .catch(() => {
        setMetaTags('', '', pageUrl);
      })
      .finally(() => onUpdated(this.window));
  }

  windowChange = () => {
    this.screenSize = {
      width: this.document.documentElement.clientWidth,
      height:
        this.document.documentElement.clientWidth > 1024
          ? this.document.documentElement.clientHeight - 112
          : this.document.documentElement.clientHeight - 56,
    };
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.windowChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.windowChange);
  }

  firstUpdated() {
    const pageUrl = location.href; // Can't use local location as it will get undefined
    this.fetchPageSeo('', pageUrl, onSeoUpdated);
  }
}
