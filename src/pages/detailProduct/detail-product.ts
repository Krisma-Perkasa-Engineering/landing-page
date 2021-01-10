import {
  LitElement,
  html,
  customElement,
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
import {setTitle, setMetaDescription} from '../../helpers/seo/seo';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import EmailIcon from '../../assets/images/icons/email.svg';
import PhoneIcon from '../../assets/images/icons/phone.svg';
import BackIcon from '../../assets/images/icons/back.svg';

@customElement('kpe-detail-product')
export class DetailProduct extends LitElement {
  @internalProperty()
  screenSize: ScreenSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight - 56,
  };

  @internalProperty()
  isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  @internalProperty()
  product: Product;

  @internalProperty()
  corporate: Corporate = {
    phone: '0317326448',
    email: 'sales@krimsaperkasa.com',
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
        main > img {
          margin-right: 16px;
          margin-left: 0;
          width: 100%;
        }
        main > kpe-info-product {
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
                <img
                  src="${this.product.image.path}"
                  alt="${this.product.image.alt}"
                />
                <kpe-info-product
                  .isMobile="${this.isMobile}"
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

  fetchProductBySlug(slug: string) {
    /**
     * This will fetch product detail and set to local state if available, else redirect to not found page
     * TODO: Change implementation on route integration
     */
    fetchProductBySlug(slug)
      .then((product) => (this.product = product))
      .catch((err: Error) => console.log(err.message));
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

  onBackClick = () => {
    // TODO: Change implementation on route integration
    console.log('Back button clicked!');
  };

  onMainLogoClick = () => {
    // TODO: Change implementation on route integration
    console.log('Main logo clicked!');
  };

  windowChange = () => {
    this.screenSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight - 56,
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
    // TODO: Change implementation on route integration. Should be replaced by URL path
    this.fetchProductBySlug('pompa-submersible-flugo-v-6');
    this.fetchPageSeo('pompa-sentrifugal');
  }
}
