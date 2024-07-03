import i18n from '@/locales';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const lang = to.params.lang;
  if (lang !== i18n.global.locale.value) {
    const temp = Array.isArray(lang) ? lang[0] : lang;
    if (['en', 'zh'].includes(temp)) {
      i18n.global.locale.value = temp;
    }
  }
  next();
});

export default router;
