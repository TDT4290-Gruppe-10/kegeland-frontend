import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiCaller } from '../../../utils/apiCaller';

import { FetchSessionsDto, Session } from './sessions.interface';

/**
 * Thunk for fetching session by id form the database
 * @param id the reqested params
 */
export const fetchSessionById = createAsyncThunk(
  'sessions/fetchSessionById',
  async (id: string) =>
    apiCaller<Session>({
      url: `sessions/${id}`,
      method: 'GET',
    }),
);

/**
 * Thunk for fetching sessions for a parieent form the database
 * @param params the reqested params
 */
export const fetchSessions = createAsyncThunk(
  'sessions/fetchSessions',
  async (params: FetchSessionsDto) =>
    apiCaller<Session[]>({
      url: 'sessions',
      method: 'GET',
      params,
    }),
);
