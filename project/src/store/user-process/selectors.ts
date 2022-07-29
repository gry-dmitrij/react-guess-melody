import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';
import {AuthorizationStatus} from '../../const/authorization-status';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
