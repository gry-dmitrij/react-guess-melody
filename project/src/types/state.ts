import {Questions} from './question';
import {AuthorizationStatus} from '../const/authorization-status';
import {RootState} from '../store/root-reducer';
import {store} from '../index';

export type GameData = {
  questions: Questions,
  isDataLoaded: boolean,
}

export type GameProcess = {
  mistakes: number,
  step: number,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
}

export type State = RootState;

export type AppDispatch = typeof store.dispatch;
