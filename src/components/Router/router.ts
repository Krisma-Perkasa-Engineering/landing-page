import {Router} from '@vaadin/router';

import '../../pages/home/home';
import '../../pages/listBrandsAndCategories/list-brands-and-categories';
import '../../pages/listProductsByTag/list-products-by-tag';
import '../../pages/detailProduct/detail-product';
import '../../pages/pageNotFound/page-not-found';

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
      path: '/404',
      component: 'kpe-page-not-found',
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
      path: '/:mainSlug/product/:productSlug',
      component: 'kpe-detail-product',
    },
    {
      path: '(.*)',
      redirect: '/404',
    },
  ]);
}
