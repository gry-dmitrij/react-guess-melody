import {combineReducers} from 'redux';
import {gameData} from './game-data/game-data';
import {gameProcess} from './game-process/game-process';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  game = 'GAME',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: gameData,
  [NameSpace.game]: gameProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
