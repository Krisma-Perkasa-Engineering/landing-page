import {LitElement, html, customElement, css} from 'lit-element';

@customElement('kpe-footer')
export class Footer extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
        font-family: 'Roboto', 'Poppins', 'Arial';
        margin: 32px 0 16px 0;
      }
    `;
  }
  render() {
    return html`
      <p>Copyright 2020 CV. Krisma Perkasa Engineering</p>
      <p>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik">Freepik</a> and
        <a href="https://www.flaticon.com/authors/payungkead">Payungkead</a>
        from <a href="https://www.flaticon.com">www.flaticon.com</a>
      </p>
    `;
  }
}
