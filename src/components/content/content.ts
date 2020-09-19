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
          margin: this.screenSize.width > 1024 ? '32px 112px' : '32px',
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}
