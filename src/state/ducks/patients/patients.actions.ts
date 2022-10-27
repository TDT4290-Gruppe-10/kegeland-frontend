import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiCaller } from "../../../utils/apiCaller";

export const getAllPatients = createAsyncThunk(
  "users/get-all-users",
  async () =>
    apiCaller<any>({ url: "users/get-all-patients", method: "GET" }).then(
      async (res) => {
        return res;
      }
    )
);

export const getAllPatientSessions = createAsyncThunk(
  "sensors/sessions",
  async (uid: string) =>
    apiCaller<any>({ url: `sensors/sessions/${uid}`, method: "GET" }).then(
      async (res) => {
        return res;
      }
    )
);

export const getPatientExercise = createAsyncThunk(
  "sensors/sessions",
  async (sessionId: string) =>
    apiCaller<any>({ url: `sensors/session/${sessionId}`, method: "GET" }).then(
      async (res) => {
        return res;
      }
    )
);

export const getPatientOverview = createAsyncThunk(
  "users/overview",
  async (userId: string) => 
    apiCaller<any>({url: `users/overview/${userId}`, method: "GET"}).then( 
      async (res) => {
        return res
      }
    )
)
