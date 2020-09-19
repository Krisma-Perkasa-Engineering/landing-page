import {fixture, html} from '@open-wc/testing';

import {ContactUsContent} from '../contact-us-content';

const assert = chai.assert;

suite('contact-us-content', () => {
  test('contact-us-content is defined', async () => {
    const el = document.createElement('contact-us-content');
    assert.instanceOf(el, ContactUsContent);
  });

  test('render contact us content', async () => {
    const el = await fixture(html`<contact-us-content></contact-us-content>>`);
    assert.shadowDom.equalSnapshot(el);
  });
});
