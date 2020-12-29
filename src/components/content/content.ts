import {LitElement, html, customElement, css, property} from 'lit-element';
import {styleMap} from 'lit-html/directives/style-map';

import {ScreenSize} from '../types';

@customElement('content-container')
export class Content extends LitElement {
  static get styles() {
    // TODO: Fix space between content
    return css`
      :host {
        font-family: 'Roboto', 'Poppins', 'Arial';
      }
      div {
        display: flex;
        flex-direction: column;
        /* min-height: 100vh; */
      }
      ::slotted(*:last-child) {
        margin-top: auto;
      }
    `;
  }

  @property({type: Object})
  screenSize: ScreenSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };

  render() {
    return html`
      <div
        style=${styleMap({
          minHeight: `${this.screenSize.height}px`,
          margin:
            this.screenSize.width > 1024 ? '0 112px 0 112px' : '0 32px 0 32px',
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}
