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
import {setTitle, setMetaDescription} from '../../helpers/seo/seo';
import {fetchPageSeo as fetchPageSeoAction} from '../../actions/pageSeos';
import {PageSeo} from '../../actions/types';

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

  /**
   * This will fetch tag detail and set to local state
   */
  async fetchTag(tagSlug: string) {
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

  /**
   * This will fetch list of products by tag and set to local state
   */
  async fetchProductsSummaryByTag(tagSlug: string) {
    const products: Array<ProductSummary> = await fetchProductsSummaryByTagAction(
      tagSlug
    );
    this.products = products;
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
    await this.fetchTag('pompa-sentrifugal');
    await this.fetchProductsSummaryByTag('pompa-sentrifugal');
    this.fetchPageSeo('pompa-sentrifugal');
  }
}
