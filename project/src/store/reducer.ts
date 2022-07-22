import {FIRST_GAME_STEP} from '../const/game-state';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';
import {isAnswerCorrect} from '../game';
import {AuthorizationStatus} from '../const/authorization-status';

const initialState: State = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
  questions: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const STEP_COUNT = 1;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.IncrementStep:
      return {...state, step: state.step + STEP_COUNT};
    case ActionType.CheckUserAnswer: {
      const {question, userAnswer} = action.payload;
      const mistakes = state.mistakes += Number(!isAnswerCorrect(question, userAnswer));
      return {...state, mistakes};
    }
    case ActionType.ResetGame:
      return {
        ...state,
        mistakes: 0,
        step: FIRST_GAME_STEP,
      };
    case ActionType.LoadQuestions:
      return {...state, questions: action.payload.questions};
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
