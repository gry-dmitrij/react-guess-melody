import {
  ActionType
} from '../types/action';
import {Question, Questions, UserAnswer} from '../types/question';
import {AuthorizationStatus} from '../const/authorization-status';
import {createAction} from '@reduxjs/toolkit';

export const checkUserAnswer = createAction(
  ActionType.CheckUserAnswer,
  (question: Question, userAnswer: UserAnswer) => ({
    payload: {
      question,
      userAnswer,
    },
  }),
);

export const incrementStep = createAction(ActionType.IncrementStep);

export const resetGame = createAction(ActionType.ResetGame);

export const loadQuestions = createAction(
  ActionType.LoadQuestions,
  (questions: Questions) => ({
    payload: {
      questions,
    },
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);
