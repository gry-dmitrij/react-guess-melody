import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const/authorization-status';
import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, requireLogout} from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export {userProcess};
