import {fixture, html} from '@open-wc/testing';

import {AboutUs} from '../about-us';

const assert = chai.assert;

suite('about-us', () => {
  test('about-us is defined', async () => {
    const el = document.createElement('about-us');
    assert.instanceOf(el, AboutUs);
  });

  test('render about us content', async () => {
    const el = await fixture(html`<about-us></about-us>>`);
    assert.shadowDom.equalSnapshot(el);
  });
});
