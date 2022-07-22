import {
  checkUserAnswer,
  incrementStep,
  loadQuestions,
  requireAuthorization, requireLogout,
  resetGame
} from '../store/action';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {State} from './state';
import {AxiosInstance} from 'axios';

export enum ActionType {
  CheckUserAnswer = 'game/checkUserAnswer',
  IncrementStep = 'game/incrementStep',
  ResetGame = 'game/reset',
  LoadQuestions = 'data/loadQuestions',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  ReturnType<typeof checkUserAnswer> |
  ReturnType<typeof incrementStep> |
  ReturnType<typeof resetGame> |
  ReturnType<typeof loadQuestions> |
  ReturnType<typeof requireAuthorization> |
  ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
