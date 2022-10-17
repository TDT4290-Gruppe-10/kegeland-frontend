import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiCaller } from '../../../utils/apiCaller';
import { removeTokens, retrieveTokens, storeTokens } from '../../../utils/storage';

import { allTokensExist } from './auth.helpers';
import {
  AuthTokens,
  LoginDTO,
  LoginResponse,
  RegisterDTO,
  RegisterResponse,
  ResetPasswordDTO,
} from './auth.interface';

export const initializeAuthState = createAsyncThunk<boolean>(
  'auth/initialize',
  async () => {
    const tokens = await retrieveTokens();
    return allTokensExist(tokens);
  },
);

export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (data: LoginDTO) =>
    apiCaller<LoginResponse>('auth/login', 'POST', data).then(async (res) => {
      await storeTokens(res.tokens);
      return res;
    }),
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async () =>
    apiCaller<AuthTokens>('auth/refresh', 'POST').then(async (res) => {
      await storeTokens(res);
      return res;
    }),
);

export const signOutUser = createAsyncThunk('auth/signOutUser', async () =>
  apiCaller<void>('auth/logout', 'POST').then(async (res) => {
    await removeTokens();
    return res;
  }),
);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (data: RegisterDTO) =>
    apiCaller<RegisterResponse>('auth/register', 'POST', data).then(
      async (res) => {
        await storeTokens(res.tokens);
        return res;
      },
    ),
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data: ResetPasswordDTO) => {
    apiCaller<void>('auth/reset', 'POST', data);
  },
);
