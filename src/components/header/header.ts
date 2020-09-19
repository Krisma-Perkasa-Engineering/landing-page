import {LitElement, css, html, customElement} from 'lit-element';
import LogoPath from '../../assets/images/logo/kpe.svg';

@customElement('kpe-header')
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
        align-items: center;
        justify-content: center;
      }
      img {
        height: 36px;
      }
    `;
  }

  render() {
    return html`
      <header>
        <img src="${LogoPath}" alt="Krisma Perkasa Engineering logo" />
      </header>
    `;
  }
}
