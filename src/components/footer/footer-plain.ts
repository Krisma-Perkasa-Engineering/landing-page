import {LitElement, html, customElement, css} from 'lit-element';

@customElement('kpe-footer-plain')
export class Footer extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
        font-family: 'Roboto', 'Poppins', 'Arial';
      }
    `;
  }
  render() {
    return html`
      <footer>
        <p>Copyright 2020 CV. Krisma Perkasa Engineering</p>
      </footer>
    `;
  }
}
