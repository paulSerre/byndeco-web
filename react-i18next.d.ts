/* eslint-disable no-unused-vars */
import 'react-i18next';
// import all namespaces (for the default language, only)
import auth from './public/locales/es/authES.json';
import common from '../public/locales/es/commonES.json';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    defaultNS: 'auth',
    resources: {
      auth: typeof auth;
      common: typeof common;
    }
  }
}
