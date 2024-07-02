import { createApp } from 'vue';
import App from './App.vue';
import i18n from './locales';
import router from './router';

import '@/assets/css/reset.css';

// 获取当前域名以设置语言
// const hostname = window.location.hostname;
// const language = hostname.startsWith('zh.') ? 'zh' : 'en';
// i18n.global.locale = language;

createApp(App).use(router).use(i18n).mount('#app');
