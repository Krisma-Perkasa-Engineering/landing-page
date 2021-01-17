import {LitElement, html, customElement, css} from 'lit-element';

@customElement('kpe-footer')
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
        <p>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik">Freepik</a> and
          <a href="https://www.flaticon.com/authors/payungkead">Payungkead</a>
          from <a href="https://www.flaticon.com">www.flaticon.com</a>
        </p>
      </footer>
    `;
  }
}
