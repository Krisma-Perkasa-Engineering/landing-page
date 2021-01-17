import {LitElement, html, customElement, property, css} from 'lit-element';

import pump from '../../assets/images/icons/pump.svg';
import electricMotor from '../../assets/images/icons/electric-motor.svg';

@customElement('our-product')
export class OurProduct extends LitElement {
  @property({type: Object})
  window: Window = window;

  @property({type: Object})
  history: History = this.window.history;

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
        padding-top: 16px;
        margin-bottom: 32px;
        width: 240px;
        cursor: pointer;
        letter-spacing: 2px;
      }

      .section-container h3 {
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 0;
      }

      .arrow {
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
      }

      .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }

      h3 {
        font-size: var(--kpe-h3-font-size);
        font-weight: var(--kpe-h3-font-weight);
      }
    `;
  }

  render() {
    return html`
      <article>
        <h1>Produk Kami</h1>
        <div id="container">
          <div
            class="section-container"
            @click=${() => this.onItemClick('pompa-industri')}
          >
            <img src=${pump} alt="Pompa Industri" />
            <h3>
              Pompa Industri <i class="arrow right"></i
              ><i class="arrow right"></i>
            </h3>
            <!-- <p>Produk unggulan kami seperti pompa Franklin, Flugo, dll.</p> -->
          </div>
          <div
            class="section-container"
            @click=${() => this.onItemClick('motor-elektrik')}
          >
            <img src=${electricMotor} alt="Motor Elektrik" />
            <h3>
              Motor Elektrik <i class="arrow right"></i
              ><i class="arrow right"></i>
            </h3>
            <!-- <p>Produk unggulan kami seperti motor Alliance, Franklin, dll.</p> -->
          </div>
        </div>
      </article>
    `;
  }

  onItemClick = (slug: string) => {
    this.history.pushState({}, null, slug);
    this.window.dispatchEvent(new PopStateEvent('popstate'));
  };
}
