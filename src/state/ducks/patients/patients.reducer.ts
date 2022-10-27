import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPatients,
  getAllPatientSessions,
  getPatientExercise,
  getPatientOverview
} from "./patients.actions";

const initialState: any = {
  patients: [],
  loading: false,
  error: undefined,
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPatients.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getAllPatients.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = undefined;
        state.patients = payload;
      })
      .addCase(getAllPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const singlePatientInitialState: any = {
  patientData: [],
  loading: false,
  error: undefined,
  patientInformation: {}
};

const singlePatientSlice = createSlice({
  name: "patientData",
  initialState: singlePatientInitialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPatientSessions.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getAllPatientSessions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = undefined;
        state.patientData = payload.data;
      })
      .addCase(getAllPatientSessions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getPatientOverview.pending, (state) => {
        state.loading = true;
        state.error = undefined
      })
      .addCase(getPatientOverview.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = undefined;
        state.patientInformation = payload;
      })
      .addCase(getPatientOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

const exerciseInitialState: any = {
  exerciseData: {},
  loading: false,
  error: undefined,
};

const exerciseSlice = createSlice({
  name: "exerciseData",
  initialState: exerciseInitialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatientExercise.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getPatientExercise.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = undefined;
        state.exerciseData = payload;
      })
      .addCase(getPatientExercise.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearError } = patientsSlice.actions;

export const patientReducer = patientsSlice.reducer;
export const singlePatientReducer = singlePatientSlice.reducer;
export const exerciseReducer = exerciseSlice.reducer;
