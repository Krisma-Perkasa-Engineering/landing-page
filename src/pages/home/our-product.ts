import {LitElement, html, customElement, css} from 'lit-element';

import pump from '../../assets/images/icon/pump.svg';
import electricMotor from '../../assets/images/icon/electric-motor.svg';

@customElement('our-product')
export class OurProduct extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
        font-family: 'Roboto', 'Poppins', 'Arial';
        margin: 0 32px;
      }

      img {
        width: 64px;
        height: 64px;
      }

      #container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }

      .section-container {
        width: 240px;
      }
    `;
  }

  render() {
    return html`
      <h1>Produk Kami</h1>
      <div id="container">
        <div class="section-container">
          <img src=${pump} />
          <h3>Pompa Industri</h3>
          <p>Produk unggulan kami seperti pompa Franklin, Flugo, dll.</p>
        </div>
        <div class="section-container">
          <img src=${electricMotor} />
          <h3>Motor Elektrik</h3>
          <p>Produk unggulan kami seperti motor Alliance, Franklin, dll.</p>
        </div>
      </div>
    `;
  }
}
