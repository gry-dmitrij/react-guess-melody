import {Routes, Route} from 'react-router-dom';
import ResultSuccess from '../pages/result-success/result-success';
import {AppRoute} from '../../const/route';
import Main from '../pages/main/main';
import QuestionArtist from '../pages/question-artist/question-artist';
import QuestionGenre from '../pages/question-genre/question-genre';
import Login from '../pages/login/login';
import FailTries from '../pages/fail-tries/fail-tries';

type AppScreenProps = {
  errorsCount: number
}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Main errorsCount={errorsCount} />} />
      <Route path={AppRoute.DevArtist} element={<QuestionArtist />} />
      <Route path={AppRoute.DevGenre} element={<QuestionGenre />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Result} element={<ResultSuccess />} />
      <Route path={AppRoute.Lose} element={<FailTries />} />
    </Routes>
  );
}

export default App;
