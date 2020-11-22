import {fixture, html} from '@open-wc/testing';

import {Item} from '../item';
import {Image} from '../types';

const assert = chai.assert;

suite('kpe-item', () => {
  test('kpe-item is defined', async () => {
    const el = document.createElement('kpe-item');
    assert.instanceOf(el, Item);
  });

  test('render item content', async () => {
    const image: Image = {
      title: 'Pompa Sentrifugal Vertikal multistage SS',
      path: 'https://path.to.image.com/image',
      alt: 'Pompa sentrifugal vertikal multistage SS',
    };
    const el = await fixture(html`<kpe-item .image=${image}></kpe-item>>`);
    assert.shadowDom.equalSnapshot(el);
  });
});
