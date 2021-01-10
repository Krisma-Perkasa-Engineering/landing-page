// import {fixture, html} from '@open-wc/testing';
// import sinon from 'sinon';

// import {ListItems} from '../list-items';
// import {Item} from '../types';

// const assert = chai.assert;

// suite('kpe-list-items', () => {
//   const listItems: Array<Item> = [
//     {
//       name: 'Item 1',
//       image: {path: 'https://path.to.image.com/image', alt: 'Item 1'},
//       slug: 'item-1',
//     },
//   ];
//   test('render list item content', async () => {
//     const el = await fixture(
//       html`<kpe-list-items
//         .listItems=${listItems}
//         .listTitle=${'Merek'}
//         .screenSize="${{width: 1440, height: 1024}}"
//       ></kpe-list-items>`
//     );
//     console.log(el);
//     assert.shadowDom.equalSnapshot(el);
//   });

//   test('list item item click', async () => {
//     const onClick = sinon.mock();
//     const el = (await fixture(
//       html`<kpe-list-items
//         .listItems=${listItems}
//         .listTitle=${'Merek'}
//         .screenSize="${{width: 1440, height: 1024}}"
//         @item-click=${onClick}
//       ></kpe-list-items>`
//     )) as ListItems;
//     console.log(el);
//     const item: HTMLElement = el.shadowRoot.querySelector(
//       'kpe-item'
//     ) as HTMLElement;
//     item.click();
//     await el.updateComplete;
//     assert(onClick.calledOnce);
//   });
// });

// TODO: Find out why can't test list-items component
