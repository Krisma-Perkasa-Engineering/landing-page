import {LitElement, css, html, customElement, property} from 'lit-element';

import {Icon} from './types';

@customElement('kpe-header-dynamic')
export class Header extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 56px;
      }
      header {
        width: 100%;
        height: 56px;
        display: flex;
        flex-direction: row;
      }
      img {
        margin: 0 16px;
        align-self: center;
        cursor: pointer;
      }
      h1 {
        align-self: center;
      }
    `;
  }

  @property({type: Object})
  icon: Icon;

  @property({type: String})
  title = '';

  onClick() {
    this.dispatchEvent(
      new CustomEvent('icon-click', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <header>
        <img
          @click=${this.onClick}
          src=${this.icon.url}
          alt=${this.icon.alt}
          width="24"
          height="24"
        />
        <h1>${this.title}</h1>
      </header>
    `;
  }
}
