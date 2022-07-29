import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {rootReducer as reducer} from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const/authorization-status';
import {ThunkAppDispatch} from './types/action';
import {checkAuthAction, fetchQuestionAction} from './store/api-actions';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';

// declare global {
//   interface Window {
//     obj: any
//   }
// }

const root = ReactDOM.createRoot(
  // eslint-disable-next-line
  document.getElementById('root')!,
);

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchQuestionAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
