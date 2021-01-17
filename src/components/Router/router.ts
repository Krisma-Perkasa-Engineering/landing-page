import {Router} from '@vaadin/router';

import '../../pages/home/home';
import '../../pages/listBrandsAndCategories/list-brands-and-categories';
import '../../pages/listProductsByTag/list-products-by-tag';
import '../../pages/detailProduct/detail-product';

window.addEventListener('load', () => {
  initRouter();
});

function initRouter() {
  const router = new Router(
    document.body.querySelector('kpe-root').shadowRoot.querySelector('#main')
  );
  router.setRoutes([
    {
      path: '/',
      component: 'kpe-home',
    },
    {
      path: '/:mainSlug',
      component: 'kpe-list-brands-and-categories',
    },
    {
      path: '/:mainSlug/:typeSlug',
      component: 'kpe-list-products-by-tag',
    },
    {
      path: '/:mainSlug/:typeSlug/:productSlug',
      component: 'kpe-detail-product',
    },
    {
      path: '(.*)',
      component: 'kpe-home',
    },
  ]);
}
