import {fixture, html} from '@open-wc/testing';
import sinon from 'sinon';

import {Header} from '../header-non-root';
import {Icon} from '../types';

const assert = chai.assert;

suite('kpe-header-dynamic', () => {
  test('kpe-header-dynamic is defined', async () => {
    const el = document.createElement('kpe-header-dynamic');
    assert.instanceOf(el, Header);
  });

  test('render header non root content', async () => {
    const icon: Icon = {
      url: 'https://path.to.image.com/image',
      alt: 'Kembali',
    };
    const el = await fixture(
      html`<kpe-header-dynamic .icon=${icon}></kpe-header-dynamic>>`
    );
    assert.shadowDom.equalSnapshot(el);
  });

  test('header non root icon click', async () => {
    const icon: Icon = {
      url: 'https://path.to.image.com/image',
      alt: 'Kembali',
    };
    const onClick = sinon.mock();
    const el = (await fixture(
      html`<kpe-header-dynamic
          .icon=${icon}
          @icon-click=${onClick}
        ></kpe-header-dynamic
        >>`
    )) as Header;
    const img = el.shadowRoot!.querySelector('img')!;
    img.click();
    await el.updateComplete;
    assert(onClick.calledOnce);
  });
});
