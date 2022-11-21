import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiCaller } from '../../../utils/apiCaller';

import { Patient } from './patients.interface';

/**
 * Thunk action for fetchin a patients from id from the database
 * @param data the request params
 * @see {@link Patient}
 */
export const fetchPatientById = createAsyncThunk(
  'patients/fetchPatientById',
  async (id: string) =>
    apiCaller<Patient>({
      url: `users/${id}`,
      method: 'GET',
    }),
);

/**
 * Thunk action from fetching a list of patients from the database
 * @see {@link Patient}
 */
export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async () =>
    apiCaller<Patient[]>({
      url: 'users/patients',
      method: 'GET',
    }),
);
