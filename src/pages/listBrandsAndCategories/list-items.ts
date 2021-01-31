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

  @property({type: String})
  basePathTarget: string = '';

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
              slot="item"
              .item=${restItem}
              .targetPath="${this.basePathTarget}/${slug}"
            ></kpe-item>`;
          })}
        </kpe-items>
      </div>
    `;
  }
}
