import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { uk } from './locales/uk/translation';
import { en } from './locales/en/translation';

export const langs = {
  UK: 'uk',
  EN: 'en',
};

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: langs.EN,
  debug: false,
  resources,
});

export default i18n;
