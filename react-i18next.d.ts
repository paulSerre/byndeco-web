/* eslint-disable no-unused-vars */
import 'react-i18next';
// import all namespaces (for the default language, only)
import auth from './public/locales/es/authES.json';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    defaultNS: 'auth',
    resources: {
      auth: typeof auth;
    }
  }
}
