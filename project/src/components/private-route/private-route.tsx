import {Navigate, Route, RouteProps} from 'react-router-dom';
import {AppRoute} from '../../const/route';
import {AuthorizationStatus} from '../../const/authorization-status';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus} = props;
  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} />;
  }
  return <Route {...props} />;
}

