import { I18nOptions, createI18n } from 'vue-i18n';

// messages
const imports: Record<string, any> = import.meta.glob('./*.json', {
  eager: true,
});
const messages: Record<string, MessageSchema> = {};
Object.keys(imports).map((key) => {
  const name = key.replace(/\.\/(.*)\.json/, '$1');
  console.log(imports[key]?.default);
  messages[name] = imports[key]?.default;
});

// 1. 通过浏览器设置语言
// export function detectLocale() {
//   let locale = navigator.language.toLowerCase();
//   switch (true) {
//     case /^zh.*/i.test(locale):
//       locale = 'zh';
//       break;
//     case /^en.*/i.test(locale):
//       locale = 'en';
//       break;
//   }
//   return locale;
// }
// locale: detectLocale(),
// 2. 通过路由（todo）
// 3. 通过子域名（nginx）（todo）

const i18n = createI18n<false, I18nOptions>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
