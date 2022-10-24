import { createSlice } from "@reduxjs/toolkit";
import { getSessionData } from "./sensors.actions";

const initialState: any = {
  sessionData: {},
  loading: false,
  error: undefined,
};

const sensorSlice = createSlice({
  name: "sensors",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSessionData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getSessionData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = undefined;
        state.patients = payload;
      })
      .addCase(getSessionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearError } = sensorSlice.actions;

export const sensorReducer = sensorSlice.reducer;
