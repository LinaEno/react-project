import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// import HttpApi from 'i18next-http-backend';
// import translationEn from '../../public/locales/en/translation';
// import translationUk from '../../public/locales/uk/translation';

export const langs = {
  UK: 'uk',
  EN: 'en',
};

// const resources = {
//   en: {
//     translation: translationEn,
//   },
//   uk: {
//     translation: translationUk,
//   },
// };

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // supportedLngs: [langs.EN, langs.UK],
    fallbackLng: langs.EN,
    // whitelist: ['en', 'uk'],
    debug: true,
    resources: {
      uk: { translation: 'uk' },
      en: { translation: 'en' },
    },
    // resources,
    // backend: {
    //   loadPath: '/locales/{{lng}}/translation.json',
    //   loadPath: '../../public/locales/{{lng}}/translation.json',
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
  });

export default i18n;
