import {LitElement, html, customElement, property, css} from 'lit-element';

import {
  ContactIcon,
  Corporate,
  CorporateTemplate,
  ProductDetail,
} from './types';

@customElement('kpe-info-product')
export class InfoProduct extends LitElement {
  @property({type: Boolean})
  isMobile: boolean;

  @property({type: Object})
  product: ProductDetail;

  @property({type: Object})
  corporate: Corporate = {
    phone: '0317326448',
    email: 'sales@krismaperkasa.com',
    whatsapp: '62816503088',
  };

  @property({type: Object})
  corporateTemplate: CorporateTemplate = {
    email: {
      subjectTemplate: (productName) => `Tanya mengenai produk ${productName}`,
      bodyTemplate: (productName) =>
        `Halo Krisma Perkasa Engineering, saya ingin mengetahui tentang produk ${productName} lebih dalam.`,
    },
    whatsapp: {
      bodyTemplate: (productName) =>
        `Halo Krisma Perkasa Engineering, saya ingin mengetahui tentang produk ${productName} lebih dalam.`,
    },
  };

  @property({type: Object})
  contactIcon: ContactIcon;

  static get styles() {
    return css`
      .product-title,
      .specification,
      .description {
        text-align: center;
      }

      .specification > p {
        text-align: left;
      }

      .contact {
        text-align: center;
        height: 32px;
        margin-bottom: 16px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
          0px 3px 6px rgba(0, 0, 0, 0.23);
        border-radius: 90px;
      }

      .contact.whatsapp {
        background-color: #25d366;
        color: white;
      }

      .contact.whatsapp > a > img {
        filter: invert(1);
      }

      .contact > a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-decoration: none;
        color: inherit;
      }

      h1 {
        font-size: var(--kpe-h1-font-size);
        font-weight: var(--kpe-h1-font-weight);
      }

      h2 {
        font-size: var(--kpe-h2-font-size);
        font-weight: var(--kpe-h2-font-weight);
      }

      p,
      a {
        font-size: var(--kpe-p-font-size);
        line-height: var(--kpe-p-line-height);
      }
    `;
  }

  render() {
    return html`
      <div class="info-product-container">
        <div class="product-title">
          <h1>${this.product.name}</h1>
        </div>
        ${this.product.specifications.length > 0
          ? html`<div class="specification">
              <h2>Spesifikasi</h2>
              ${this.product.specifications.map(
                (specification) =>
                  html`<p>${specification.name}: ${specification.value}</p>`
              )}
            </div>`
          : html``}

        <div class="contacts">
          <div class="contact whatsapp">
            <a
              href="https://wa.me/${this.corporate
                .whatsapp}?text=${encodeURIComponent(
                this.corporateTemplate.whatsapp.bodyTemplate(this.product.name)
              )}"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                src="${this.contactIcon.whatsapp.path}"
                alt="${this.contactIcon.whatsapp.alt}"
              />
              &nbsp;Hubungi melalui whatsapp</a
            >
          </div>
          <div class="contact">
            <a
              href="mailto:${this.corporate.email}?subject=${encodeURIComponent(
                this.corporateTemplate.email.subjectTemplate(this.product.name)
              )}&body=${encodeURIComponent(
                this.corporateTemplate.email.bodyTemplate(this.product.name)
              )}"
              ><img
                src="${this.contactIcon.email.path}"
                alt="${this.contactIcon.email.alt}"
              />
              &nbsp;Hubungi melalui email</a
            >
          </div>
          ${this.isMobile
            ? html`<div class="contact">
                <a href="tel:${this.corporate.phone}"
                  ><img
                    src="${this.contactIcon.phone.path}"
                    alt="${this.contactIcon.phone.alt}"
                  />
                  &nbsp;Hubungi melalui telepon</a
                >
              </div>`
            : html``}
        </div>
        <div class="description">
          <h2>Deskripsi</h2>
          <p>${this.product.description}</p>
        </div>
      </div>
    `;
  }
}
