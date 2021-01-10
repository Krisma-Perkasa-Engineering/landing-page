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

  async fetchCategories(typeSlug: string) {
    /**
     * This will fetch list of categories and set to local state
     */
    const categories: Array<CategoryDTO> = await fetchCategoriesAction(
      typeSlug
    );
    this.listCategories = categories;
  }

  async fetchBrands(typeSlug: string) {
    /**
     * This will fetch list of brands and set to local state
     */
    const brands: Array<CategoryDTO> = await fetchBrandsAction(typeSlug);
    this.listBrands = brands;
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

  async connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.windowChange);
    // TODO: Change implementation on route integration
    await this.fetchCategories('pompa');
    await this.fetchBrands('pompa');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.windowChange);
  }

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
}
