import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import authES from '../public/locales/es/authES.json';
import commonES from '../public/locales/es/commonES.json';

export const resources = {
  es: {
    auth: authES,
    common: commonES,
  },
} as const;

export const defaultNS = 'auth'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    ns: [
      'auth',
      'common',
    ],
    defaultNS,
    lng: 'es',
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
