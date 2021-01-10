import {
  LitElement,
  html,
  customElement,
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
import {Category as CategoryDTO} from '../../actions/types';
import {ScreenSize} from '../../components/types';
import {Item} from './types';
import {setTitle, setMetaDescription} from '../../helpers/seo/seo';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

import backIcon from '../../assets/images/icons/back.svg';

@customElement('kpe-list-brands-and-categories')
export class ListBrandsAndCategories extends LitElement {
  @internalProperty()
  screenSize: ScreenSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight - 56,
  };

  @internalProperty()
  listTitle: string = '';

  @internalProperty()
  listCategories: Array<Item> = [];

  @internalProperty()
  listBrands: Array<Item> = [];

  static get styles() {
    return css`
      h1 {
        text-align: center;
      }
    `;
  }

  render() {
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
              .title=${'Pompa Industri'}
              @icon-click=${this.onBackClick}
            ></kpe-header-dynamic>`}
        <content-container .screenSize=${this.screenSize}>
          <main>
            ${this.screenSize.width > 1024
              ? html`<h1>Pompa Industri</h1>`
              : html``}
            <kpe-list-items
              .screenSize=${this.screenSize}
              .listTitle=${'Merek'}
              .listItems=${this.listBrands}
              @item-click=${this.onItemClick}
            ></kpe-list-items>
            <kpe-list-items
              .screenSize=${this.screenSize}
              .listTitle=${'Jenis'}
              .listItems=${this.listCategories}
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
  async fetchCategories(typeSlug: string) {
    const categories: Array<CategoryDTO> = await fetchCategoriesAction(
      typeSlug
    );
    this.listCategories = categories;
  }

  /**
   * This will fetch list of brands and set to local state
   */
  async fetchBrands(typeSlug: string) {
    const brands: Array<CategoryDTO> = await fetchBrandsAction(typeSlug);
    this.listBrands = brands;
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

  onItemClick = (itemEvent: CustomEvent) => {
    console.log(itemEvent.detail.value);
  };

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

  async firstUpdated() {
    // TODO: Change implementation on route integration
    await this.fetchCategories('pompa');
    await this.fetchBrands('pompa');
    this.fetchPageSeo('pompa-industri');
  }
}
