import {Routes, Route} from 'react-router-dom';
import ResultSuccess from '../pages/result-success/result-success';
import {AppRoute} from '../../const/route';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import FailTries from '../pages/fail-tries/fail-tries';
import {Questions} from '../../types/question';
import GameScreen from '../pages/game-screen/game-screen';

type AppScreenProps = {
  errorsCount: number;
  questions: Questions;
}

function App({errorsCount, questions}: AppScreenProps): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Main errorsCount={errorsCount} />} />
      <Route path={AppRoute.Game} element={
        <GameScreen questions={questions} />
      }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Result} element={<ResultSuccess />} />
      <Route path={AppRoute.Lose} element={<FailTries />} />
    </Routes>
  );
}

export default App;
