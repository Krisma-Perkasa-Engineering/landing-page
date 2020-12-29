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
import '../../components/items/items.ts';
import '../../components/item/item.ts';
import '../../components/footer/footer-plain.ts';

import {fetchTag as fetchTagAction} from '../../actions/tags';
import {Tag as TagDTO} from '../../actions/types';
import {fetchProductsSummaryByTag as fetchProductsSummaryByTagAction} from '../../actions/products';
import {ProductSummary, ScreenSize} from '../../components/types';
import {Tag} from './types';

import backIcon from '../../assets/images/icons/back.svg';

@customElement('kpe-list-products-by-tag')
export class ListProductsBytag extends LitElement {
  @internalProperty()
  screenSize: ScreenSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight - 56,
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

  async fetchTag(tagSlug: string) {
    /**
     * This will fetch tag detail and set to local state
     */
    const tag: TagDTO = await fetchTagAction(tagSlug);
    if (!tag) {
      // Should be redirected to 404 page not found
      this.tag = {
        id: '',
        name: 'Kategori tidak ditemukan',
        description:
          'Maaf, kami tidak memiliki produk dengan kategori yang anda cari.',
        slug: '',
      };
    } else {
      this.tag = tag;
    }
  }

  async fetchProductsSummaryByTag(tagSlug: string) {
    /**
     * This will fetch list of products by tag and set to local state
     */
    const products: Array<ProductSummary> = await fetchProductsSummaryByTagAction(
      tagSlug
    );
    this.products = products;
  }

  windowChange = () => {
    this.screenSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight - 56,
    };
  };

  async connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.windowChange);
    await this.fetchTag('pompa-sentrifugal');
    await this.fetchProductsSummaryByTag('pompa-sentrifugal');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.windowChange);
  }

  static get styles() {
    return css`
      img {
        min-height: 53px;
        max-height: 61px;
        display: block;
        margin: auto;
      }
      p {
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <div>
        ${this.screenSize.width > 1024
          ? html`<kpe-header></kpe-header>`
          : html`<kpe-header-dynamic
              .icon=${{
                url: backIcon,
                alt: 'Back button',
              }}
              .title=${this.tag.name}
            ></kpe-header-dynamic>`}
        <content-container .screenSize=${this.screenSize}>
          <main>
            ${this.tag.imageDescription
              ? html`<img
                  src=${this.tag.imageDescription.path}
                  alt=${this.tag.imageDescription.path}
                />`
              : html``}
            <p>${this.tag.description}</p>
            <kpe-items>
              ${this.products.map((product) => {
                return html`<kpe-item slot="item" .item=${product}></kpe-item>`;
              })}
            </kpe-items>
          </main>
          <kpe-footer-plain></kpe-footer-plain>
        </content-container>
      </div>
    `;
  }
}
