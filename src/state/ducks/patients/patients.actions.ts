import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiCaller } from '../../../utils/apiCaller';

import { Patient } from './patients.interface';
export const getAllPatients = createAsyncThunk('users/patients', async () =>
  apiCaller<any>({ url: 'users/patients', method: 'GET' }).then(async (res) => {
    return res;
  }),
);

export const fetchPatientById = createAsyncThunk(
  'patients/fetchPatientById',
  async (id: string) =>
    apiCaller<Patient>({
      url: `users/${id}`,
      method: 'GET',
    }),
);

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async () =>
    apiCaller<Patient[]>({
      url: 'users/patients',
      method: 'GET',
    }),
);
