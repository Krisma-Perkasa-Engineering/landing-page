import {LitElement, html, customElement, property, css} from 'lit-element';

import '../../components/items/items.ts';
import '../../components/item/item.ts';

import {ScreenSize} from '../../components/types';
import {Item} from './types';

@customElement('kpe-list-items')
export class ListItems extends LitElement {
  @property({type: Object})
  screenSize: ScreenSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight - 56,
  };

  @property({type: Array})
  listItems: Array<Item> = [];

  @property({type: String})
  listTitle: string = '';

  onItemClick(itemSlug: string) {
    this.dispatchEvent(
      new CustomEvent('item-click', {
        bubbles: true,
        composed: true,
        detail: {
          message: 'item-click happened.',
          value: itemSlug,
        },
      })
    );
  }

  static get styles() {
    return css`
      h2 {
        text-align: center;
        font-size: var(--kpe-h2-font-size);
        font-weight: var(--kpe-h2-font-weight);
      }
    `;
  }

  render() {
    return html`
      <div>
        <h2>${this.listTitle}</h2>
        <kpe-items>
          ${this.listItems.map((item) => {
            const {slug, ...restItem} = item;
            return html`<kpe-item
              @click=${() => this.onItemClick(slug)}
              slot="item"
              .item=${restItem}
            ></kpe-item>`;
          })}
        </kpe-items>
      </div>
    `;
  }
}
