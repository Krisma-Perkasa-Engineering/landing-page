import {LitElement, html, customElement, css, property} from 'lit-element';

@customElement('kpe-items')
export class Items extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
      }
      .items-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
      }
      ::slotted(*) {
        margin-bottom: 16px;
        margin-left: 16px;
        margin-right: 16px;
      }
      @media screen and (min-width: 1025px) {
        .items-container {
          justify-content: flex-start;
        }
        ::slotted(*) {
          margin-left: 0;
          margin-right: 32px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="items-container">
        <slot name="image"></slot>
      </div>
    `;
  }
}
