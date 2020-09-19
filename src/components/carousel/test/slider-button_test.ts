import {fixture, html} from '@open-wc/testing';

import {SliderButton} from '../slider-button';
import {Direction} from '../types';

const assert = chai.assert;

suite('carousel-slider-button', () => {
  test('carousel-slider-button is defined', async () => {
    const el = document.createElement('carousel-slider-button');
    assert.instanceOf(el, SliderButton);
  });

  test('render button with default direction', async () => {
    const el = await fixture(
      html`<carousel-slider-button></carousel-slider-button>`
    );
    assert.shadowDom.equal(el, `<button><</button>`);
  });

  test('render button with previous direction', async () => {
    const el = await fixture(
      html`<carousel-slider-button
        direction=${Direction.Previous}
      ></carousel-slider-button>`
    );
    assert.shadowDom.equal(el, `<button><</button>`);
  });

  test('render button with next direction', async () => {
    const el = await fixture(
      html`<carousel-slider-button
        direction=${Direction.Next}
      ></carousel-slider-button>`
    );
    assert.shadowDom.equal(el, `<button>></button>`);
  });
});
