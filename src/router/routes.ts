import { defineComponent, h, resolveComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import i18n from '../locales';

const routes: RouteRecordRaw[] = [
  {
    path: '/:lang(en|zh)*',
    component: defineComponent({
      render() {
        return h(resolveComponent('router-view'));
      },
    }),
    beforeEnter: (to, from, next) => {
      const lang = to.params.lang;
      const temp = Array.isArray(lang) ? lang[0] : lang;
      if (['en', 'zh'].includes(temp)) {
        i18n.global.locale.value = temp;
      }
      return next();
    },
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
];

export default routes;
