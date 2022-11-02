import { PayloadAction } from '@reduxjs/toolkit';
import { every, values } from 'lodash';

import { AuthState, LoginResponse } from './auth.interface';

export enum Token {
  ACCESS_TOKEN = 'access_token',
  ID_TOKEN = 'id_token',
  REFRESH_TOKEN = 'refresh_token',
}

export const allTokensExist = (tokens: Record<Token, string>): boolean => {
  const tokenKeys = values(Token);
  return every(
    Object.entries(tokens),
    ([key, val]) => tokenKeys.includes(key as Token) && val !== null,
  );
};

export const clearSignedInState = () => {
  return {
    isSignedIn: false,
    authUser: undefined,
    userDetails: undefined,
  };
};

export const signInReducer = (
  state: AuthState,
  action: PayloadAction<LoginResponse>,
) => {
  const { id, email } = action.payload;
  state.isSignedIn = true;
  state.authUser = { id, email };
  state.userDetails = action.payload.details;
};

export const signOutReducer = (state: AuthState) => {
  state.isSignedIn = false;
  state.authUser = undefined;
  state.userDetails = undefined;
};
