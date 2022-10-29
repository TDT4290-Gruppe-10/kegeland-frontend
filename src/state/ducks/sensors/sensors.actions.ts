import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiCaller } from '../../../utils/apiCaller';

export const getSessionData = createAsyncThunk(
  'sessions/',
  async (sessionId: string) =>
    apiCaller<any>({ url: `sessions/${sessionId}`, method: 'GET' }).then(
      async (res) => {
        return res;
      },
    ),
);
