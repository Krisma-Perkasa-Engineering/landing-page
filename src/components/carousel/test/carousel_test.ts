import {fixture, html} from '@open-wc/testing';

import {Carousel} from '../carousel';
import {Images} from '../types';

const assert = chai.assert;

suite('carousel-images', () => {
  const images: Array<Images> = [
    {
      title: 'Ringankan beban Anda dengan konsultasi pada ahlinya',
      path: 'assets/images/carousel/banner-pump-1.jpg',
      alt: 'Pabrik kimia',
    },
    {
      title: 'Perkuat bisnis anda dengan produk berkualitas',
      path: 'assets/images/carousel/banner-pump-2.jpg',
      alt: 'Pompa industri',
    },
    {
      title:
        'Hilangkan kekhawatiran anda dengan layanan purna jual yang profesional',
      path: 'assets/images/carousel/banner-pump-3.jpg',
      alt: 'Berbagai jenis pompa',
    },
  ];

  test('carousel-images is defined', async () => {
    const el = document.createElement('carousel-images');
    assert.instanceOf(el, Carousel);
  });

  test('render carousel with no params', async () => {
    const el = await fixture(html`<carousel-images></carousel-images>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="carousel">
        <div
          class="carousel-content-container"
          style="width: 0px;"
        />
      </div>
      `
    );
  });

  test('render carousel with 3 images and 1440x1024 screen size', async () => {
    const el = await fixture(
      html`<carousel-images
        .images="${images}"
        .screenSize="${{width: 1440, height: 1024}}"
      ></carousel-images>`
    );
    const imgs = el.shadowRoot.querySelectorAll('img');
    imgs[0].removeAttribute('src');
    imgs[1].removeAttribute('src');
    imgs[2].removeAttribute('src');
    assert.shadowDom.equalSnapshot(el);
  });
});
