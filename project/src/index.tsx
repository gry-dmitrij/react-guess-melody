import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const SETTINGS = {
  ERRORS_COUNT: 3,
};

ReactDOM.render(
  <React.StrictMode>
    <App errorsCount={SETTINGS.ERRORS_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
