import React from 'react';
import ReactDOM from 'react-dom/client';
import Init from './Init';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Init />
  </React.StrictMode>
);
