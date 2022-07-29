import {GameProcess} from '../../types/state';
import {FIRST_GAME_STEP} from '../../const/game-state';
import {isAnswerCorrect} from '../../game';
import {createReducer} from '@reduxjs/toolkit';
import {checkUserAnswer, incrementStep, resetGame} from '../action';

const initialState: GameProcess = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
};

const STEP_COUNT = 1;

const gameProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step += STEP_COUNT;
    })
    .addCase(checkUserAnswer, (state, action) => {
      const {question, userAnswer} = action.payload;
      state.mistakes += Number(!isAnswerCorrect(question, userAnswer));
    })
    .addCase(resetGame, (state) => {
      state.step = FIRST_GAME_STEP;
      state.mistakes = 0;
    });
});

export {gameProcess};
