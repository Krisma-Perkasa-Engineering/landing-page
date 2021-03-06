import {LitElement, html, customElement, css} from 'lit-element';

import './contact-us-content';

import address from '../../assets/images/icons/address.svg';
import email from '../../assets/images/icons/email.svg';
import phone from '../../assets/images/icons/phone.svg';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

@customElement('contact-us')
export class ContactUs extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
        font-family: 'Roboto', 'Poppins', 'Arial';
        margin: 0 32px;
      }

      #container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }

      h1 {
        font-size: var(--kpe-h1-font-size);
        font-weight: var(--kpe-h1-font-weight);
      }

      p {
        font-size: var(--kpe-p-font-size);
        line-height: var(--kpe-p-line-height);
      }
    `;
  }
  render() {
    return html`
      <article>
        <h1>Kontak Kami</h1>
        <div id="container">
          <contact-us-content>
            <img slot="icon" src=${address} alt="Alamat" />
            <p slot="content">Jl. Simpang Darmo Permai Selatan V/51 Surabaya</p>
          </contact-us-content>
          <contact-us-content>
            <img slot="icon" src=${whatsapp} alt="Whatsapp" />
            <p slot="content">
              <a href="https://wa.me/62816503088">0816503088</a>
            </p>
          </contact-us-content>
          <contact-us-content>
            <img slot="icon" src=${phone} alt="Telepon" />
            <p slot="content">
              <a href="tel:0317343447">031-7343447</a> /
              <a href="tel:0317326448">031-7326448</a>
            </p>
          </contact-us-content>
          <contact-us-content>
            <img slot="icon" src=${email} alt="Email" />
            <p slot="content">
              <a href="mailto:sales@krismaperkasa.com"
                >sales@krismaperkasa.com</a
              >
            </p>
          </contact-us-content>
        </div>
      </article>
    `;
  }
}
