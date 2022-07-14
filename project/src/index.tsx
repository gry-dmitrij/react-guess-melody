import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';

const SETTINGS = {
  ERRORS_COUNT: 3,
};

const root = ReactDOM.createRoot(
  document.getElementById('root')!,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App errorsCount={SETTINGS.ERRORS_COUNT}/>
    </BrowserRouter>
  </React.StrictMode>,
);
