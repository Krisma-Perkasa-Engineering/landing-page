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
import '../../components/items/items.ts';
import '../../components/item/item.ts';
import '../../components/footer/footer-plain.ts';

import {fetchTag as fetchTagAction} from '../../actions/tags';
import {Tag as TagDTO} from '../../actions/types';
import {fetchProductsSummaryByTag as fetchProductsSummaryByTagAction} from '../../actions/products';
import {ProductSummary, ScreenSize} from '../../components/types';
import {Tag} from './types';
import {setMetaTags, onSeoUpdated} from '../../helpers/seo/seo';
import {CustomWindow} from '../../helpers/seo/types';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

import backIcon from '../../assets/images/icons/back.svg';

@customElement('kpe-list-products-by-tag')
export class ListProductsBytag extends LitElement {
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

  @internalProperty()
  tag: Tag = {
    id: '',
    name: '',
    description: '',
    slug: '',
  };

  @internalProperty()
  products: Array<ProductSummary> = [];

  static get styles() {
    return css`
      img {
        min-height: 53px;
        max-height: 61px;
        max-width: 100%;
        display: block;
        margin: auto;
        object-fit: contain;
      }
      p {
        text-align: center;
        font-size: var(--kpe-p-font-size);
        line-height: var(--kpe-p-line-height);
      }
    `;
  }

  render() {
    const baseTargetPath = `${this.location.pathname
      .split('/')
      .slice(0, -1)
      .join('/')}/product`;
    return html`
      <div>
        ${this.screenSize.width > 1024
          ? html`<kpe-header
              @main-logo-click=${this.onMainLogoClick}
            ></kpe-header>`
          : html`<kpe-header-dynamic
              .icon=${{
                url: backIcon,
                alt: 'Back button',
              }}
              .title=${this.tag.name}
              @icon-click=${this.onBackClick}
            ></kpe-header-dynamic>`}
        <content-container .screenSize=${this.screenSize}>
          <main>
            ${this.tag.image
              ? html`<img
                  src=${this.tag.image.path}
                  alt=${this.tag.image.path}
                />`
              : html``}
            <p>${this.tag.description}</p>
            <kpe-items>
              ${this.products.map((product) => {
                return html`<kpe-item
                  slot="item"
                  .item=${product}
                  .targetPath="${baseTargetPath}/${product.slug}"
                ></kpe-item>`;
              })}
            </kpe-items>
          </main>
          <kpe-footer-plain></kpe-footer-plain>
        </content-container>
      </div>
    `;
  }

  /**
   * This will fetch tag detail and set to local state
   */
  fetchTag(tagSlug: string) {
    fetchTagAction(tagSlug)
      .then((tag: TagDTO) => {
        this.tag = tag;
      })
      .catch((err: Error) => {
        this.history.replaceState({errorMessage: err.message}, null, '/404');
        this.window.dispatchEvent(new PopStateEvent('popstate'));
      });
  }

  /**
   * This will fetch list of products by tag and set to local state
   */
  fetchProductsSummaryByTag(tagSlug: string, mainCategory: string) {
    fetchProductsSummaryByTagAction(tagSlug, mainCategory)
      .then((products: Array<ProductSummary>) => {
        this.products = products;
      })
      .catch((err: Error) => {
        this.products = [];
      });
  }

  /**
   * This will fetch SEO metadata for current page
   */
  fetchPageSeo(slug: string, pageUrl: string, onUpdated: typeof onSeoUpdated) {
    fetchPageSeoAction(slug)
      .then((pageSeo: PageSeo) => {
        setMetaTags(pageSeo.title, pageSeo.description, pageUrl, pageSeo.image);
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
    const typeSlug = this.location.pathname.split('/').pop();
    const mainCategory = this.location.pathname.split('/').slice(-2)[0];
    const pageUrl = location.href; // Can't use local location as it will get undefined
    this.fetchTag(typeSlug);
    this.fetchProductsSummaryByTag(typeSlug, mainCategory);
    this.fetchPageSeo(`${mainCategory}/${typeSlug}`, pageUrl, onSeoUpdated);
  }
}
