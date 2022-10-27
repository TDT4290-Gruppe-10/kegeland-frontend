import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiCaller } from "../../../utils/apiCaller";

export const getSessionData = createAsyncThunk(
  "sensors/session",
  async (sessionId: string) =>
    apiCaller<any>({ url: `sensors/session/${sessionId}`, method: "GET" }).then(
      async (res) => {
        return res;
      }
    )
);
