import {fixture, html} from '@open-wc/testing';

import {Items} from '../items';

const assert = chai.assert;

suite('kpe-items', () => {
  test('kpe-items is defined', async () => {
    const el = document.createElement('kpe-items');
    assert.instanceOf(el, Items);
  });

  test('render items content', async () => {
    const el = await fixture(
      html`<kpe-items
          ><div slot="image">1</div>
          <div slot="image">2</div></kpe-items
        >>`
    );
    assert.shadowDom.equalSnapshot(el);
  });
});
