import {Routes, Route} from 'react-router-dom';
import ResultSuccess from '../pages/result-success/result-success';
import {AppRoute} from '../../const/route';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import FailTries from '../pages/fail-tries/fail-tries';
import GameScreen from '../pages/game-screen/game-screen';
import {MAX_MISTAKE_COUNT} from '../../const/game-state';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import {isCheckedAuth} from '../../game';
import PrivateRoute from '../private-route/private-route';

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Main errorsCount={MAX_MISTAKE_COUNT} />} />
      <Route path={AppRoute.Game} element={
        <GameScreen />
      }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Result}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
          >
            <ResultSuccess />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Lose} element={<FailTries />} />
    </Routes>
  );
}

export {App};
export default connector(App);
