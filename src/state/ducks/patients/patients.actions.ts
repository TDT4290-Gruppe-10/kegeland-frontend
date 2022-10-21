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

// export const refresh = createAsyncThunk(
//   'auth/refresh',
//   async () =>
//     apiCaller<AuthTokens>('auth/refresh', 'POST').then(async (res) => {
//       await storeTokens(res);
//       return res;
//     }),
// );

// export const signOutUser = createAsyncThunk('auth/signOutUser', async () =>
//   apiCaller<void>('auth/logout', 'POST').then(async (res) => {
//     await removeTokens();
//     return res;
//   }),
// );

// export const signUpUser = createAsyncThunk(
//   'auth/signUpUser',
//   async (data: RegisterDTO) =>
//     apiCaller<RegisterResponse>('auth/register', 'POST', data).then(
//       async (res) => {
//         await storeTokens(res.tokens);
//         return res;
//       },
//     ),
// );

// export const resetPassword = createAsyncThunk(
//   'auth/resetPassword',
//   async (data: ResetPasswordDTO) => {
//     apiCaller<void>('auth/reset', 'POST', data);
//   },
// );
