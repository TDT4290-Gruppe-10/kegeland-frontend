import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiCaller } from "../../../utils/apiCaller";

export const getSessionData = createAsyncThunk(
  "sensors/session",
  async (sessionId: string) =>
    apiCaller<any>(`sensors/session/${sessionId}`, "GET").then(async (res) => {
      return res;
    })
);
