import {LitElement, html, customElement, css, property} from 'lit-element';

import {Item as ItemType} from './types';

@customElement('kpe-item')
export class Item extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 240px;
      }
      a {
        display: block;
        width: 240px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
          0px 3px 6px rgba(0, 0, 0, 0.23);
        padding-bottom: 16px;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
        color: inherit;
      }
      a > img {
        object-fit: contain;
        margin-top: 16px;
      }
      h2 {
        font-size: 16px;
        text-align: center;
        font-size: var(--kpe-h2-font-size);
        font-weight: var(--kpe-h2-font-weight);
        margin-left: 16px;
        margin-right: 16px;
      }
    `;
  }

  @property({type: Object})
  item: ItemType;

  @property({type: String})
  targetPath: string;

  render() {
    return html`
      <a href=${this.targetPath} class="item-container">
        <img
          src=${this.item.image.path}
          width="208"
          height="208"
          alt=${this.item.image.alt}
        />
        <h2>${this.item.name}</h2>
      </a>
    `;
  }
}
