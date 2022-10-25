/* eslint-disable no-unused-vars */
import 'react-i18next';
// import all namespaces (for the default language, only)
import { defaultNS, resources } from 'i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS,
    resources: typeof resources['es']
  }
}
