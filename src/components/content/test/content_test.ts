import {fixture, html} from '@open-wc/testing';

import {Content} from '../content';

const assert = chai.assert;

suite('content-container', () => {
  test('content-container is defined', async () => {
    const el = document.createElement('content-container');
    assert.instanceOf(el, Content);
  });

  test('render content with screen width smaller than 1024', async () => {
    const el = await fixture(
      html`
        <content-container .screenSize="${{width: 320, height: 512}}">
        </content-container>
      `
    );
    assert.shadowDom.equal(
      el,
      `
      <div style="min-height: 512px; margin: 0px 32px;">
        <slot></slot>
      </div>
      `
    );
  });

  test('render content with screen width bigger than 1024', async () => {
    const el = await fixture(
      html`
        <content-container .screenSize="${{width: 1440, height: 1024}}">
        </content-container>
      `
    );
    assert.shadowDom.equal(
      el,
      `
      <div style="min-height: 1024px; margin: 0px 112px;">
        <slot></slot>
      </div>
      `
    );
  });
});
