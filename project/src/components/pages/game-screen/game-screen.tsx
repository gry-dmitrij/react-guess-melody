import {QuestionArtist, QuestionGenre, Questions} from '../../../types/question';
import {useState} from 'react';
import {FIRST_GAME_STEP, GameType} from '../../../const/game-state';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../../const/route';
import QuestionArtistScreen from '../question-artist/question-artist-screen';
import QuestionGenreScreen from '../question-genre/question-genre-screen';

type GameScreenProps = {
  questions: Questions;
};

function GameScreen({questions}: GameScreenProps): JSX.Element {
  const [step, setStep] = useState(FIRST_GAME_STEP);

  const question = questions[step];

  if (step >= questions.length || !questions) {
    return <Navigate to={AppRoute.Root} />;
  }

  switch (question.type) {
    case GameType.Artist:
      return (
        <QuestionArtistScreen
          key={step}
          question={question as QuestionArtist}
          onAnswer={() => setStep((prevStep) => prevStep + 1)}
        />
      );
    case GameType.Genre:
      return (
        <QuestionGenreScreen
          key={step}
          question={question as QuestionGenre}
          onAnswer={() => setStep((prevStep) => prevStep + 1)}
        />
      );
    default:
      return <Navigate to={AppRoute.Root} />;
  }
}

export default GameScreen;
