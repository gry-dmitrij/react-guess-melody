// import Main from '../pages/main/main';
import ResultSuccess from '../pages/result-success/result-success';

type AppScreenProps = {
  errorsCount: number
}

function App({errorsCount}: AppScreenProps): JSX.Element {
  // return <Main errorsCount={errorsCount}/>;
  return <ResultSuccess/>;
}

export default App;
