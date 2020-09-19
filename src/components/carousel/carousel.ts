import {
  LitElement,
  html,
  css,
  customElement,
  property,
  internalProperty,
} from 'lit-element';

import ImageProcessor from './imageProcessor';
import './slider-button';
import {Direction, Images, ImagesProcessed} from './types';
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
  activeIndex: number = 0;

  @internalProperty()
  imagesProcessed: Array<ImagesProcessed> = [];

  static get styles() {
    return css`
      .image-container {
        position: relative;
        text-align: center;
        color: black;
        display: none;
      }

      .image-container[show='true'] {
        display: block;
      }

      .image-container h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-family: 'Poppins', 'Roboto', 'Arial';
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

  decreaseActiveIndex() {
    this.activeIndex =
      this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1;
  }

  increaseActiveIndex() {
    this.activeIndex =
      this.activeIndex === this.images.length - 1 ? 0 : this.activeIndex + 1;
  }

  render() {
    return html`
      <div id="carousel-container">
        <div id="carusel-image-container">
          ${this.imagesProcessed.map((image, idx) => {
            return html`
              <div class="image-container" show=${this.activeIndex === idx}>
                <img src=${image.url} alt=${image.alt} />
                <h1>${image.title}</h1>
              </div>
            `;
          })}
        </div>
        <carousel-slider-button
          id="previous-button"
          direction=${Direction.Previous}
          @button-click=${this.decreaseActiveIndex}
        ></carousel-slider-button>
        <carousel-slider-button
          id="next-button"
          direction=${Direction.Next}
          @button-click=${this.increaseActiveIndex}
        ></carousel-slider-button>
      </div>
    `;
  }
}
