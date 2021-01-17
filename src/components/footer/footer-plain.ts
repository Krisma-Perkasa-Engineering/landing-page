import {LitElement, html, customElement, css} from 'lit-element';

@customElement('kpe-footer-plain')
export class Footer extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
        font-family: 'Roboto', 'Poppins', 'Arial';
      }

      p {
        font-size: var(--kpe-p-font-size);
        line-height: var(--kpe-p-line-height);
      }
    `;
  }
  render() {
    return html`
      <footer>
        <p>
          Copyright ${new Date().getFullYear()} CV. Krisma Perkasa Engineering
        </p>
      </footer>
    `;
  }
}
