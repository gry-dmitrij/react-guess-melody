import {checkUserAnswer, incrementStep, resetGame} from '../store/action';

export enum ActionType {
  // IncrementMistake = 'game/incrementMistake',
  CheckUserAnswer = 'game/checkUserAnswer',
  IncrementStep = 'game/incrementStep',
  ResetGame = 'game/reset',
}

export type Actions =
  ReturnType<typeof checkUserAnswer> |
  ReturnType<typeof incrementStep> |
  ReturnType<typeof resetGame>;
