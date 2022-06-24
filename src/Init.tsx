import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import { store } from './slices/store';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

const Init: React.FC = () => {
  return (
    // Созданный инстанс передаем в приложение
    <I18nextProvider i18n={i18n}>
      {/* Оборачиваем приложение в Provider
        и передаем в него хранилище */}
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  );
};
export default Init;