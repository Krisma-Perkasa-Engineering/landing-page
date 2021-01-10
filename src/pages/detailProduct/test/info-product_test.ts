import {fixture, html} from '@open-wc/testing';

import {InfoProduct} from '../info-product';
import {ContactIcon, Product} from '../types';

const assert = chai.assert;

suite('kpe-info-product', () => {
  const contactIcon: ContactIcon = {
    whatsapp: {
      path: 'https://path.to.icon/whatsapp',
      alt: 'whatsapp',
    },
    email: {
      path: 'https://path.to.icon/email',
      alt: 'email',
    },
    phone: {
      path: 'https://path.to.icon/phone',
      alt: 'telepon',
    },
  };
  const product: Product = {
    id: '3f9cfb93-e99e-4048-a34c-1556077dc286',
    name: 'Pompa submersible Flugo V-6',
    description:
      'Pompa submersible terbaik di kelasnya. Terbuat dari bahan metal anti karat yang dapat bertahan di cairan kimia sekalipun. Pompa ini dapat digunakan untuk kebutuhan sumur dan pabrik anda. Pompa submersible ini dapat bertahan hingga 10 tahun dalam kondisi optimal.',
    image: {
      path: 'https://path.to.imge/pompa-submersible-flugo-v-6',
      alt: 'Pompa submersible flugo V-6',
    },
    specifications: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
  };

  test('kpe-info-product is defined', async () => {
    const el = document.createElement('kpe-info-product');
    assert.instanceOf(el, InfoProduct);
  });

  test('render carousel using mobile device', async () => {
    const el = await fixture(
      html`<kpe-info-product
        .contactIcon=${contactIcon}
        .product=${product}
        .isMobile=${true}
      ></kpe-info-product>`
    );
    assert.shadowDom.equalSnapshot(el);
  });

  test('render carousel using desktop', async () => {
    const el = await fixture(
      html`<kpe-info-product
        .contactIcon=${contactIcon}
        .product=${product}
        .isMobile=${false}
      ></kpe-info-product>`
    );
    assert.shadowDom.equalSnapshot(el);
  });
});
