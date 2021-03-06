import {
  LitElement,
  html,
  customElement,
  property,
  internalProperty,
  css,
} from 'lit-element';

import './info-product.ts';
import '../../components/header/header-non-root.ts';
import '../../components/header/header.ts';
import '../../components/content/content.ts';
import '../../components/footer/footer-plain.ts';

import {ScreenSize} from '../../components/types';
import {ContactIcon, Corporate, CorporateTemplate, Product} from './types';
import {fetchProductBySlug} from '../../actions/products';
import {setMetaTags, onSeoUpdated} from '../../helpers/seo/seo';
import {CustomWindow} from '../../helpers/seo/types';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import EmailIcon from '../../assets/images/icons/email.svg';
import PhoneIcon from '../../assets/images/icons/phone.svg';
import BackIcon from '../../assets/images/icons/back.svg';

@customElement('kpe-detail-product')
export class DetailProduct extends LitElement {
  @property({type: Object})
  window: CustomWindow = window;

  @property({type: Object})
  history: History = this.window.history;

  @property({type: Object})
  location: Location = this.window.location;

  @property({type: Object})
  navigator: Navigator = navigator;

  @property({type: Object})
  document: Document = document;

  @internalProperty()
  screenSize: ScreenSize = {
    width: this.document.documentElement.clientWidth,
    height: this.document.documentElement.clientHeight - 56,
  };

  @internalProperty()
  isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    this.navigator.userAgent
  );

  @internalProperty()
  product: Product;

  @internalProperty()
  corporate: Corporate = {
    phone: '0317326448',
    email: 'sales@krismaperkasa.com',
    whatsapp: '62816503088',
  };

  @internalProperty()
  corporateTemplate: CorporateTemplate = {
    email: {
      subjectTemplate: (productName) => `Tanya mengenai produk ${productName}`,
      bodyTemplate: (productName) =>
        `Halo Krisma Perkasa Engineering, saya ingin mengetahui tentang produk ${productName} lebih dalam.`,
    },
    whatsapp: {
      bodyTemplate: (productName) =>
        `Halo Krisma Perkasa Engineering, saya ingin mengetahui tentang produk ${productName} lebih dalam.`,
    },
  };

  @internalProperty()
  contactIcon: ContactIcon;

  static get styles() {
    return css`
      main {
        text-align: center;
      }
      img {
        margin-left: -32px;
        width: calc(100% + 64px);
      }
      kpe-header-dynamic {
        display: block;
        position: absolute;
        background-color: rgba(255, 255, 255, 0);
      }
      @media screen and (min-width: 1025px) {
        main {
          display: flex;
        }
        main > div {
          flex-grow: 1;
          margin-right: 16px;
          margin-left: 0;
          width: 100%;
        }
        main > div > img {
          max-width: 100%;
        }
        main > kpe-info-product {
          flex-grow: 1;
          width: 100%;
          margin-left: 16px;
        }
      }
    `;
  }

  render() {
    const contactIcon = {
      whatsapp: {
        path: WhatsappIcon,
        alt: 'whatsapp',
      },
      email: {
        path: EmailIcon,
        alt: 'email',
      },
      phone: {
        path: PhoneIcon,
        alt: 'telepon',
      },
    };
    return html`
      <div class="detail-product-container">
        ${this.screenSize.width > 1024
          ? html`<kpe-header
              @main-logo-click=${this.onMainLogoClick}
            ></kpe-header>`
          : html`<kpe-header-dynamic
              .icon=${{
                url: BackIcon,
                alt: 'Back button',
              }}
              .title=${''}
              @icon-click=${this.onBackClick}
            ></kpe-header-dynamic>`}
        ${this.product
          ? html` <content-container .screenSize=${this.screenSize}>
              <main>
                <div>
                  <img
                    src="${this.product.image.path}"
                    alt="${this.product.image.alt}"
                  />
                </div>
                <kpe-info-product
                  ?isMobile="${this.isMobile}"
                  .product="${this.product}"
                  .corporate="${this.corporate}"
                  .corporateTemplate="${this.corporateTemplate}"
                  .contactIcon="${contactIcon}"
                ></kpe-info-product>
              </main>
              <kpe-footer-plain></kpe-footer-plain
            ></content-container>`
          : html`<div>Loading...</div>`}
      </div>
    `;
  }

  /**
   * This will fetch product detail and set to local state if available, else redirect to not found page
   */
  fetchProductBySlug(slug: string) {
    fetchProductBySlug(slug)
      .then((product) => (this.product = product))
      .catch((err: Error) => {
        this.history.replaceState({errorMessage: err.message}, null, '/404');
        this.window.dispatchEvent(new PopStateEvent('popstate'));
      });
  }

  /**
   * This will fetch SEO metadata for current page
   */
  fetchPageSeo(slug: string, pageUrl: string, onUpdated: typeof onSeoUpdated) {
    const baseUrl = pageUrl.split('/').slice(0, 3).join('/');
    fetchPageSeoAction(slug)
      .then((pageSeo: PageSeo) => {
        setMetaTags(
          pageSeo.title,
          pageSeo.description,
          pageUrl,
          baseUrl + pageSeo.image
        );
      })
      .catch(() => {
        setMetaTags('', '', pageUrl);
      })
      .finally(() => onUpdated(this.window));
  }

  onBackClick = () => {
    this.history.back();
  };

  onMainLogoClick = () => {
    this.history.pushState({}, null, '/');
    this.window.dispatchEvent(new PopStateEvent('popstate'));
  };

  windowChange = () => {
    this.screenSize = {
      width: this.document.documentElement.clientWidth,
      height: this.document.documentElement.clientHeight - 56,
    };
  };

  connectedCallback() {
    super.connectedCallback();
    this.window.addEventListener('resize', this.windowChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.window.removeEventListener('resize', this.windowChange);
  }

  firstUpdated() {
    const productSlug = this.location.pathname.split('/').pop();
    const pageUrl = location.href; // Can't use local location as it will get undefined
    this.fetchProductBySlug(productSlug);
    this.fetchPageSeo(`product/${productSlug}`, pageUrl, onSeoUpdated);
  }
}
