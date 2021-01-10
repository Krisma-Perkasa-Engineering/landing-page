import {LitElement, html, customElement} from 'lit-element';

import './pages/home/home.ts';

@customElement('kpe-root')
export class Root extends LitElement {
  render() {
    return html`
      <div>
        <kpe-home></kpe-home>
      </div>
    `;
  }
}
