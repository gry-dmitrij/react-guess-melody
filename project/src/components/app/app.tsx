import {Routes, Route} from 'react-router-dom';
import ResultSuccess from '../pages/result-success/result-success';
import {AppRoute} from '../../const/route';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import FailTries from '../pages/fail-tries/fail-tries';
import GameScreen from '../pages/game-screen/game-screen';
import {MAX_MISTAKE_COUNT} from '../../const/game-state';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Main errorsCount={MAX_MISTAKE_COUNT} />} />
      <Route path={AppRoute.Game} element={
        <GameScreen />
      }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Result} element={<ResultSuccess />} />
      <Route path={AppRoute.Lose} element={<FailTries />} />
    </Routes>
  );
}

export default App;
