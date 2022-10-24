import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiCaller } from "../../../utils/apiCaller";

export const getAllPatients = createAsyncThunk(
  "users/get-all-users",
  async () =>
    apiCaller<any>("users/get-all-patients", "GET").then(async (res) => {
      console.log("here");
      return res;
    })
);

export const getAllPatientSessions = createAsyncThunk(
  "sensors/sessions",
  async (uid: string) =>
    apiCaller<any>(`sensors/sessions/${uid}`, "GET").then(async (res) => {
      return res;
    })
);

export const getPatientExercise = createAsyncThunk(
  "sensors/sessions",
  async (sessionId: string) =>
    apiCaller<any>(`sensors/session/${sessionId}`, "GET").then(async (res) => {
      return res;
    })
);
