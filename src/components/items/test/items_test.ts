import {fixture, html} from '@open-wc/testing';

import {Items} from '../items';
import {Image} from '../types';

const assert = chai.assert;

suite('kpe-items', () => {
  test('kpe-items is defined', async () => {
    const el = document.createElement('kpe-items');
    assert.instanceOf(el, Items);
  });

  test('render contact us content', async () => {
    const images: Image[] = [
      {
        title: 'Pompa Sentrifugal Vertikal multistage SS',
        path: 'https://path.to.image.com/image/vertical.jpg',
        alt: 'Pompa sentrifugal vertikal multistage SS',
      },
      {
        title: 'Pompa Sentrifugal Horisontal multistage SS',
        path: 'https://path.to.image.com/image/horisontal.jpg',
        alt: 'Pompa sentrifugal horisontal multistage SS',
      },
    ];
    const el = await fixture(html`<kpe-items .images=${images}></kpe-items>>`);
    assert.shadowDom.equalSnapshot(el);
  });
});
