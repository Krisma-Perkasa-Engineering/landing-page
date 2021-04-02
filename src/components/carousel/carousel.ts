import {
  LitElement,
  html,
  css,
  customElement,
  property,
  internalProperty,
} from 'lit-element';
import {styleMap} from 'lit-html/directives/style-map';

import ImageProcessor from './imageProcessor';
import generateAnimationConfig from './generateAnimationConfig';
import {Images, ImagesProcessed} from './types';
import {ScreenSize} from '../types';

@customElement('carousel-images')
export class Carousel extends LitElement {
  @property({type: Array})
  images: Array<Images> = [];

  @property({type: Object})
  screenSize: ScreenSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };

  @internalProperty()
  imagesProcessed: Array<ImagesProcessed> = [];

  static get styles() {
    return css`
      :host {
        position: relative;
        overflow-x: hidden;
      }

      .carousel-content-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        overflow-x: hidden;
      }

      .carousel-banner-container {
        position: relative;
        text-align: center;
      }

      .carousel-banner-container > h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-family: 'Poppins', 'Roboto', 'Arial';

        font-size: var(--kpe-h1-font-size);
        font-weight: var(--kpe-h1-font-weight);
      }

      #previous-button {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(0%, -50%);
      }

      #next-button {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translate(0%, -50%);
      }
    `;
  }

  render() {
    return html`
      <div class="carousel">
        <div
          class="carousel-content-container"
          style=${styleMap({
            width: `${String(
              this.screenSize.width * this.imagesProcessed.length
            )}px`,
          })}
        >
          ${this.imagesProcessed.map((image, idx) => {
            return html`
              <div class="carousel-banner-container">
                <img src=${image.url} alt=${image.alt} />
                <h1>${image.title}</h1>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  async processImage(images: Array<Images>) {
    const imagesProcessed = await Promise.all(
      images.map(async (image) => {
        return {
          ...image,
          url: await ImageProcessor(image.path, this.screenSize),
        };
      })
    );

    this.imagesProcessed = imagesProcessed.map((imageProcessed) => {
      return {
        ...imageProcessed,
        url: URL.createObjectURL(imageProcessed.url),
      };
    });
  }

  async performUpdate() {
    await this.processImage(this.images);
    super.performUpdate();
  }

  firstUpdated() {
    this.shadowRoot
      .querySelector('.carousel-content-container')
      .animate(...generateAnimationConfig(this.imagesProcessed.length));
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}
