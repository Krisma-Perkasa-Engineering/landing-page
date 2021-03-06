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
import './list-items';

import {fetchCategories as fetchCategoriesAction} from '../../actions/categories';
import {fetchBrands as fetchBrandsAction} from '../../actions/brands';
import {Category as CategoryDTO, Brand as BrandDTO} from '../../actions/types';
import {ScreenSize} from '../../components/types';
import {Item} from './types';
import {setMetaTags, onSeoUpdated} from '../../helpers/seo/seo';
import {CustomWindow} from '../../helpers/seo/types';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

import backIcon from '../../assets/images/icons/back.svg';

import {toTitleCase} from '../../helpers/toTiltleCase/toTitleCase';

@customElement('kpe-list-brands-and-categories')
export class ListBrandsAndCategories extends LitElement {
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
  listTitle: string = '';

  @internalProperty()
  listCategories: Array<Item> = [];

  @internalProperty()
  listBrands: Array<Item> = [];

  @internalProperty()
  notFoundBrandsCategories: Array<string> = [];

  static get styles() {
    return css`
      h1 {
        text-align: center;
        font-size: var(--kpe-h1-font-size);
        font-weight: var(--kpe-h1-font-weight);
      }
    `;
  }

  render() {
    const title = toTitleCase(
      this.location.pathname.split('/').pop().replace('-', ' ')
    );
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
              .title=${title}
              @icon-click=${this.onBackClick}
            ></kpe-header-dynamic>`}
        <content-container .screenSize=${this.screenSize}>
          <main>
            ${this.screenSize.width > 1024 ? html`<h1>${title}</h1>` : html``}
            <kpe-list-items
              .screenSize=${this.screenSize}
              .listTitle=${'Merek'}
              .listItems=${this.listBrands}
              .basePathTarget=${this.location.pathname}
              @item-click=${this.onItemClick}
            ></kpe-list-items>
            <kpe-list-items
              .screenSize=${this.screenSize}
              .listTitle=${'Jenis'}
              .listItems=${this.listCategories}
              .basePathTarget=${this.location.pathname}
              @item-click=${this.onItemClick}
            ></kpe-list-items>
          </main>
          <kpe-footer-plain></kpe-footer-plain>
        </content-container>
      </div>
    `;
  }

  /**
   * This will fetch list of categories and set to local state
   */
  fetchCategories(typeSlug: string) {
    fetchCategoriesAction(typeSlug)
      .then((categories: Array<CategoryDTO>) => {
        this.listCategories = categories;
      })
      .catch((err) => {
        this.listCategories = [];
        if (this.notFoundBrandsCategories.length > 0) {
          this.history.replaceState({errorMessage: err.message}, null, '/404');
          this.window.dispatchEvent(new PopStateEvent('popstate'));
        }
        this.notFoundBrandsCategories = [
          ...this.notFoundBrandsCategories,
          'fetchCategories',
        ];
      });
  }

  /**
   * This will fetch list of brands and set to local state
   */
  fetchBrands(typeSlug: string) {
    fetchBrandsAction(typeSlug)
      .then((brands: Array<BrandDTO>) => {
        this.listBrands = brands;
      })
      .catch((err) => {
        this.listBrands = [];
        if (this.notFoundBrandsCategories.length > 0) {
          this.history.replaceState({errorMessage: err.message}, null, '/404');
          this.window.dispatchEvent(new PopStateEvent('popstate'));
        }
        this.notFoundBrandsCategories = [
          ...this.notFoundBrandsCategories,
          'fetchBrands',
        ];
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

  onItemClick = (itemEvent: CustomEvent) => {
    this.history.pushState(
      {},
      null,
      `${this.location.pathname}/${itemEvent.detail.value}`
    );
    this.window.dispatchEvent(new PopStateEvent('popstate'));
  };

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
    const pageUrl = location.href; // Can't use local location as it will get undefined
    this.fetchCategories(typeSlug);
    this.fetchBrands(typeSlug);
    this.fetchPageSeo(typeSlug, pageUrl, onSeoUpdated);
  }
}
