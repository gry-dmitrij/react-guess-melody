import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';

export const getMistakes = (state: State): number => state[NameSpace.game].mistakes;
export const getStep = (state: State): number => state[NameSpace.game].step;
