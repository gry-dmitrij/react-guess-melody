import {
  Question,
  QuestionArtist,
  QuestionGenre,
  UserAnswer
} from '../../../types/question';
import {GameType, MAX_MISTAKE_COUNT} from '../../../const/game-state';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../../const/route';
import QuestionArtistScreen from '../question-artist/question-artist-screen';
import QuestionGenreScreen from '../question-genre/question-genre-screen';
import withAudioPlayer from '../../../hocs/with-audio-player/with-audio-player';
import {checkUserAnswer, incrementStep} from '../../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import Mistakes from '../../mistakes/mistakes';
import {getMistakes, getStep} from '../../../store/game-process/selectors';
import {getQuestions} from '../../../store/game-data/selectors';

const QuestionArtistScreenWrapped = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withAudioPlayer(QuestionGenreScreen);

function GameScreen(): JSX.Element {
  const step = useSelector(getStep);
  const mistakes = useSelector(getMistakes);
  const questions = useSelector(getQuestions);

  const dispatch = useDispatch();

  const onUserAnswer = (question: Question, userAnswer: UserAnswer) => {
    dispatch(incrementStep());
    dispatch(checkUserAnswer(question, userAnswer));
  };

  const question = questions[step];

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return <Navigate to={AppRoute.Lose} />;
  }

  if (step >= questions.length || !questions) {
    return <Navigate to={AppRoute.Result} />;
  }

  switch (question.type) {
    case GameType.Artist:
      return (
        <QuestionArtistScreenWrapped
          key={step}
          question={question as QuestionArtist}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionArtistScreenWrapped>
      );
    case GameType.Genre:
      return (
        <QuestionGenreScreenWrapped
          key={step}
          question={question as QuestionGenre}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionGenreScreenWrapped>
      );
    default:
      return <Navigate to={AppRoute.Root} />;
  }
}

export default GameScreen;
