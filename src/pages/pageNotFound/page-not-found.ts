import {
  LitElement,
  html,
  customElement,
  property,
  internalProperty,
  css,
} from 'lit-element';

import '../../components/header/header-non-root.ts';
import '../../components/header/header.ts';
import '../../components/content/content.ts';
import '../../components/footer/footer-plain.ts';

import {ScreenSize} from '../../components/types';
import {setMetaTags, onSeoUpdated} from '../../helpers/seo/seo';
import {CustomWindow} from '../../helpers/seo/types';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

import BackIcon from '../../assets/images/icons/back.svg';
import PageNotFoundLogo from '../../assets/images/icons/page-not-found.svg';

@customElement('kpe-page-not-found')
export class PageNotFound extends LitElement {
  @property({type: Object})
  window: CustomWindow = window;

  @property({type: Object})
  history: History = this.window.history;

  @property({type: Object})
  location: Location = this.window.location;

  @property({type: Object})
  document: Document = document;

  @internalProperty()
  screenSize: ScreenSize = {
    width: this.document.documentElement.clientWidth,
    height: this.document.documentElement.clientHeight - 56,
  };

  static get styles() {
    return css`
      h1 {
        text-align: center;
        font-size: var(--kpe-h1-font-size);
        font-weight: var(--kpe-h1-font-weight);
      }
      .logo-container {
        text-align: center;
      }
      img {
        max-height: 100%;
        max-width: 100%;
      }
    `;
  }

  render() {
    const content = 'Halaman tidak ditemukan';
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
        <content-container .screenSize=${this.screenSize}>
          <main>
            <div class="logo-container">
              <img src=${PageNotFoundLogo} />
            </div>
          </main>
          <footer></footer>
          <!-- <a href="https://www.freepik.com/vectors/background">Background vector created by freepik - www.freepik.com</a> -->
        </content-container>
      </div>
    `;
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
        setMetaTags('Halaman tidak ditemukan', '', pageUrl);
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
    this.fetchPageSeo(`product/${productSlug}`, pageUrl, onSeoUpdated);
  }
}
