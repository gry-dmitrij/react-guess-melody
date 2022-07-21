import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {configureStore} from '@reduxjs/toolkit';

// declare global {
//   interface Window {
//     obj: any
//   }
// }

const root = ReactDOM.createRoot(
  // eslint-disable-next-line
  document.getElementById('root')!,
);

const store = configureStore({reducer});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
