import React from 'react';
import widget from './images/widget.jpg';

// Загружающийся виджет. Решил использовать картинку
const SomeConvenientWidget: React.FC = () => {
  return (
    <div>
      <img alt="widget" src={widget} width="350"></img>
    </div>
  );
};

export default SomeConvenientWidget;
