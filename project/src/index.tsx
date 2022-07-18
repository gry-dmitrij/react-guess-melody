import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';
import {questions} from './mocks/questions';

// declare global {
//   interface Window {
//     obj: any
//   }
// }

const SETTINGS = {
  ERRORS_COUNT: 3,
};

const root = ReactDOM.createRoot(
  // eslint-disable-next-line
  document.getElementById('root')!,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App errorsCount={SETTINGS.ERRORS_COUNT} questions={questions}/>
    </BrowserRouter>
  </React.StrictMode>,
);
