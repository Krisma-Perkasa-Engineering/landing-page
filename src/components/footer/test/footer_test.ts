import {fixture, html} from '@open-wc/testing';

import {Footer} from '../footer';

const assert = chai.assert;

suite('kpe-footer', () => {
  test('kpe-footer is defined', async () => {
    const el = document.createElement('kpe-footer');
    assert.instanceOf(el, Footer);
  });

  test('render footer content', async () => {
    const el = await fixture(html`<kpe-footer></kpe-footer>>`);
    assert.shadowDom.equalSnapshot(el);
  });
});
