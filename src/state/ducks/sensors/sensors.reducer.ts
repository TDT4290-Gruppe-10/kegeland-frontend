import { createSlice } from '@reduxjs/toolkit';

import {
  isPendingAction,
  isFulfilledAction,
  isRejectedAction,
} from '../../../utils/thunk.utils';

import { fetchSensor } from './sensors.actions';
import { SensorState } from './sensors.interface';

const initialState: SensorState = {
  loading: false,
  data: {},
  error: undefined,
};

const sensorSlice = createSlice({
  name: 'sensors',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSensor.fulfilled, (state, { payload }) => {
        state.data[payload.name] = payload;
      })
      .addMatcher(
        (action) => isPendingAction(action, 'sensors'),
        (state) => {
          state.loading = true;
          state.error = undefined;
        },
      )
      .addMatcher(
        (action) => isFulfilledAction(action, 'sensors'),
        (state) => {
          state.loading = false;
          state.error = undefined;
        },
      )
      .addMatcher(
        (action) => isRejectedAction(action, 'sensors'),
        (state, { error }) => {
          state.loading = false;
          state.error = error.message;
        },
      );
  },
});

export const { clearError } = sensorSlice.actions;

export const sensorReducer = sensorSlice.reducer;
