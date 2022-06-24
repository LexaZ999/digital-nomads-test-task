import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales/resources';

//  Создает инстанс, чтобы глобальный объект i18next не менялся и каждый запуск приложения будет независим от других.
const i18nInstance = i18n.createInstance();

i18nInstance.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
});

export default i18nInstance;


