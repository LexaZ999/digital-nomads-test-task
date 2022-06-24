import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from './slices/hooks';
import { setStatus } from './slices/widgetSlice';
import SomeConvenientWidget from './SomeConvenientWidget';

const SpinnerAndWidget: React.FC = () => {
  const { loading, status } = useAppSelector((state) => state.widget);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  // Задержка по времени N в ms
  const delayN: number = 1000;

  // Список список ключей сообщений которые нужно менять, через N ms
  const keys: string[] = [
    'Loading.Second',
    'Loading.Third',
    'Error.Timeout',
  ];

  useEffect(() => {
    let index = 0;

    // setInterval меняет сообщения через каждые N ms
    const interval = setInterval(() => {
      dispatch(setStatus(keys[index]));
      index += 1;

      // Если список ключей закончился, отменяем таймер
      if (index === keys.length) {
        clearInterval(interval);
      }
    }, delayN);
  }, []);

  return (
    <>
      {/* Отображает виджет или спинер в зависимости от состояния */}
      {loading === 'idle' ? <SomeConvenientWidget /> : <Spinner animation="border" />}
      
       {/* Отображает сообщение */}
      <div>{t(status)}</div>
    </>
  );
};

export default SpinnerAndWidget;
