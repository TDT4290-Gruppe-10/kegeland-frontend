import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SensorType } from '../sensors/sensors.interface';

import { GraphProfile, SettingsState } from './settings.interface';

/**
 * Initial state for setting state
 */
export const initialState: SettingsState = {
  graph: {
    femfit: undefined,
    empatica: undefined,
    imu: undefined,
  },
};

/**
 * Reducer and action for setting state
 */
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setGraphProfile: (
      state: SettingsState,
      action: PayloadAction<{
        sensor: SensorType;
        profile: GraphProfile | undefined;
      }>,
    ) => {
      const { sensor, profile } = action.payload;
      state.graph[sensor] = profile;
    },
  },
});

export const { setGraphProfile } = settingsSlice.actions;

export default settingsSlice.reducer;
