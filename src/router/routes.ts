import { defineComponent, h, resolveComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/:lang(en|zh)?',
    component: defineComponent({
      render() {
        return h(resolveComponent('router-view'));
      },
    }),
    // beforeEnter：仅在第一次注册路由时运行
    children: [
      {
        path: '',
        redirect: { name: 'Home' },
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*', // 兜底路由
    redirect: '/', // 404 的情况无法识别语言，不能用 lang 来判断（所以不用 404 的路由）
  },
];

export default routes;
