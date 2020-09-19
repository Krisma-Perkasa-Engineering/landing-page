import {LitElement, html, customElement, property, css} from 'lit-element';

import {Direction} from './types';

@customElement('carousel-slider-button')
export class SliderButton extends LitElement {
  @property({type: String})
  direction: Direction = Direction.Previous;

  static get styles() {
    return css`
      button {
        border: none;
        display: inline-block;
        padding: 8px 16px;
        vertical-align: middle;
        overflow: hidden;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        white-space: nowrap;
        background-color: black;
        color: white;
        user-select: none;
      }
    `;
  }

  onClick(direction: Direction) {
    this.dispatchEvent(
      new CustomEvent('button-click', {
        bubbles: true,
        composed: true,
        detail: {
          message: 'button-click happened.',
          value: direction,
        },
      })
    );
  }

  render() {
    return html`
      <button @click=${() => this.onClick(this.direction)}>
        ${this.direction === Direction.Previous ? '<' : '>'}
      </button>
    `;
  }
}
