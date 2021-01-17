import 'regenerator-runtime/runtime';
import {LitElement, html, customElement, css} from 'lit-element';

import './components/Router/router.ts';

@customElement('kpe-root')
export class Root extends LitElement {
  static get styles() {
    return css`
      #main {
        --kpe-background-color: #ffffff;
        --kpe-text-color: #000000;
        --kpe-h1-font-size: 24px;
        --kpe-h1-font-weight: bold;
        --kpe-h2-font-size: 18px;
        --kpe-h2-font-weight: bold;
        --kpe-h3-font-size: 14px;
        --kpe-h3-font-weight: bold;
        --kpe-p-font-size: 14px;
        --kpe-p-line-height: 16px;
      }
    `;
  }

  render() {
    return html` <div id="main"></div> `;
  }
}
