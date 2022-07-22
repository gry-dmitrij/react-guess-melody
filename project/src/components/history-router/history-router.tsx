import {BrowserHistory} from 'history';
import {Router} from 'react-router-dom';
import React, {useLayoutEffect, useState} from 'react';

export interface HistoryRouterProps {
  history: BrowserHistory,
  basename?: string,
  children?: React.ReactNode,
}

function HistoryRouter({
  basename,
  children,
  history,
}:HistoryRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigator={history}
      navigationType={state.action}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
