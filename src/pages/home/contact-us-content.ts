import {LitElement, html, customElement, css} from 'lit-element';

@customElement('contact-us-content')
export class ContactUsContent extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
        font-family: 'Roboto', 'Poppins', 'Arial';
        max-width: 240px;
        width: 240px;
      }

      #icon {
        width: 24px;
        height: 24px;
      }
    `;
  }
  render() {
    return html`
      <slot id="icon" name="icon"></slot>
      <slot name="content"></slot>
    `;
  }
}
