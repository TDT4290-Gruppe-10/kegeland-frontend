import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiCaller } from "../../../utils/apiCaller";
import { GetAllPatientSessionsResponse } from "./patients.interface";

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
  "sessions",
  async (uid: string) =>
    apiCaller<GetAllPatientSessionsResponse>({ url: `sessions?userId=${uid}`, method: "GET" })
);

export const getPatientExercise = createAsyncThunk(
  "sessions",
  async (sessionId: string) =>
    apiCaller<any>({ url: `session/${sessionId}`, method: "GET" }).then(
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
