import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useAppDispatch } from './slices/hooks';
import widgetLoader from './widgetLoader';
import LanguageSwitch from './LanguageSwitch';
import SpinnerAndWidget from './SpinnerAndWidget';


const App: React.FC = () => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    // Загружает виджет (В качестве виджета использую картинку)
    dispatch(widgetLoader());
  }, []);

  return (
    <>
      <Container className="d-flex justify-content-end">

        {/* Кнопка для переключения языков */}
        <LanguageSwitch />
      </Container>

      <div className="vh-100 d-flex justify-content-center align-items-center flex-column gap-2">

        {/* Компонент который включает в себя виджет, спиннер если виджет грузится, и сообщения от загрузке */}
        <SpinnerAndWidget />
      </div>
    </>
  );
};

export default App;
