import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/pages/home/Home.vue'),
    meta: {
      title: 'meta上的title'
    }
  },
//   {
//     name: 'user',
//     component: () => import('./view/user'),
//     meta: {
//       title: '会员中心'
//     }
//   },
//   {
//     name: 'cart',
//     component: () => import('./view/cart'),
//     meta: {
//       title: '购物车'
//     }
//   },
//   {
//     name: 'goods',
//     component: () => import('./view/goods'),
//     meta: {
//       title: '商品详情'
//     }
//   }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes,mode:'history' });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router