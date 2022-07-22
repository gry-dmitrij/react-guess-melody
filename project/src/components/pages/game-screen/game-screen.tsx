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
import {State} from '../../../types/state';
import {Dispatch} from '@reduxjs/toolkit';
import {Actions} from '../../../types/action';
import {checkUserAnswer, incrementStep} from '../../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import Mistakes from '../../mistakes/mistakes';

const QuestionArtistScreenWrapped = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withAudioPlayer(QuestionGenreScreen);

const mapStateToProps = ({step, mistakes, questions}: State) => ({
  step,
  mistakes,
  questions,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onUserAnswer(question: Question, userAnswer: UserAnswer) {
    dispatch(incrementStep());
    dispatch(checkUserAnswer(question, userAnswer));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentsProps = PropsFromRedux;

function GameScreen({questions, step, mistakes, onUserAnswer}: ConnectedComponentsProps): JSX.Element {
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

export {GameScreen};
export default connector(GameScreen);
