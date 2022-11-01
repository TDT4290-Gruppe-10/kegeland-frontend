import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from '../../../utils/thunk.utils';

import { fetchSessionById, fetchSessions } from './sessions.actions';
import { Session, SessionsState } from './sessions.interface';

const initialState: SessionsState = {
  loading: false,
  session: undefined,
  data: [],
  error: undefined,
};

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    setCurrentSession: (state, action: PayloadAction<Session | undefined>) => {
      state.session = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionById.fulfilled, (state, action) => {
        state.session = action.payload;
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addMatcher(
        (action) => isPendingAction(action, 'sessions'),
        (state) => {
          state.loading = true;
          state.error = undefined;
        },
      )
      .addMatcher(
        (action) => isFulfilledAction(action, 'sessions'),
        (state) => {
          state.loading = false;
          state.error = undefined;
        },
      )
      .addMatcher(
        (action) => isRejectedAction(action, 'sessions'),
        (state, { error }) => {
          state.loading = false;
          state.error = error.message;
        },
      );
  },
});

export const { setCurrentSession } = sessionsSlice.actions;

export default sessionsSlice.reducer;
