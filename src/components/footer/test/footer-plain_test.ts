import {fixture, html} from '@open-wc/testing';

import {Footer} from '../footer-plain';

const assert = chai.assert;

suite('kpe-footer-plain', () => {
  test('kpe-footer-plain is defined', async () => {
    const el = document.createElement('kpe-footer-plain');
    assert.instanceOf(el, Footer);
  });

  test('render footer-plain content', async () => {
    const el = await fixture(html`<kpe-footer-plain></kpe-footer-plain>`);
    assert.shadowDom.equalSnapshot(el);
  });
});
