import {
  LitElement,
  html,
  customElement,
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
import {setTitle, setMetaDescription} from '../../helpers/seo/seo';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

import logo1 from '../../assets/images/carousel/banner-pump-1.jpg';
import logo2 from '../../assets/images/carousel/banner-pump-2.jpg';
import logo3 from '../../assets/images/carousel/banner-pump-3.jpg';

@customElement('kpe-home')
export class Home extends LitElement {
  @internalProperty()
  screenSize: ScreenSize = {
    width: document.documentElement.clientWidth,
    height:
      document.documentElement.clientWidth > 1024
        ? document.documentElement.clientHeight - 112
        : document.documentElement.clientHeight - 56,
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
  fetchPageSeo(slug: string) {
    fetchPageSeoAction(slug)
      .then((pageSeo: PageSeo) => {
        setTitle(pageSeo.title);
        setMetaDescription(pageSeo.description);
      })
      .catch(() => {
        setTitle('');
        setMetaDescription('');
      });
  }

  windowChange = () => {
    this.screenSize = {
      width: document.documentElement.clientWidth,
      height:
        document.documentElement.clientWidth > 1024
          ? document.documentElement.clientHeight - 112
          : document.documentElement.clientHeight - 56,
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
    this.fetchPageSeo('');
  }
}
