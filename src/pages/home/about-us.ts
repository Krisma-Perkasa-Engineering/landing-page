import {LitElement, html, customElement, css} from 'lit-element';

@customElement('about-us')
export class AboutUs extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
        font-family: 'Roboto', 'Poppins', 'Arial';
        margin: 0 32px;
      }

      h1 {
        font-size: var(--kpe-h1-font-size);
        font-weight: var(--kpe-h1-font-weight);
      }

      p {
        font-size: var(--kpe-p-font-size);
        line-height: var(--kpe-p-line-height);
      }
    `;
  }
  render() {
    return html`
      <article>
        <h1>Tentang Kami</h1>
        <p>
          Krisma Perkasa Engineering adalah perusahaan trading yang berfokus
          pada produk pompa industri dan motor elektrik. Perusahaan ini
          didirikan pada tahun 2013 dengan pengalaman kami di bidang ini selama
          puluhan tahun. Kami siap melayani kebutuhan perusahaan anda untuk
          berbagai kelas industri, mulai dari industri ringan hingga industri
          berat. Beberapa pelanggan yang pernah kami bantu, seperti pabrik,
          tambang, kontraktor pengeboran seperti pengeboran sumur, dll.
        </p>
        <p>
          Kami kurasi setiap produk yang kami jual, sehingga semua produk yang
          kami jual terjamin kualitasnya.
        </p>
        <p>
          Kami berkomitmen untuk memberikan pelayanan yang terbaik dengan
          memberikan layanan purna jual yang didukung oleh tenaga mekanik yang
          berpengalaman di bidangnya. Selain itu kami juga dengan senang hati
          membantu perusahaan anda dalam memilih spesifikasi produk guna
          mencapai efisiensi.
        </p>
      </article>
    `;
  }
}
