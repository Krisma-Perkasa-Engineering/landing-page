import {LitElement, html, customElement, css, property} from 'lit-element';

import {Image} from './types';

@customElement('kpe-item')
export class Item extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 240px;
      }
      .product-container {
        width: 240px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
          0px 3px 6px rgba(0, 0, 0, 0.23);
        padding-bottom: 16px;
      }
      h2 {
        font-size: 16px;
        text-align: center;
      }
    `;
  }

  @property({type: Object})
  image: Image;

  render() {
    return html`
      <div class="product-container">
        <img
          src=${this.image.path}
          width="240"
          height="240"
          alt=${this.image.alt}
        />
        <h2>${this.image.title}</h2>
      </div>
    `;
  }
}
