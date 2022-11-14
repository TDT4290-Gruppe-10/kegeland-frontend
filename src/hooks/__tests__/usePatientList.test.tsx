import { renderHook, waitFor } from '@testing-library/react';
import { map, merge } from 'lodash';
import moment from 'moment';
import React from 'react';
import { Provider } from 'react-redux';
import { sessionsMock } from '../../components/mocks/sessions.mock';
import fetchPatentsResponseMock from '../../state/ducks/patients/mocks/fetchPatientsRespnse.mock';
import { fetchPatients } from '../../state/ducks/patients/patients.actions';
import { Patient } from '../../state/ducks/patients/patients.interface';
import { fetchSessions } from '../../state/ducks/sessions/sessions.actions';
import { SessionsState } from '../../state/ducks/sessions/sessions.interface';
import { initialState } from '../../state/ducks/sessions/sessions.reducer';
import { initialStore, mockStore } from '../../state/mocks/store.mock';
import * as apiCaller from '../../utils/apiCaller';
import usePatient from '../usePatient';
import usePatientList from '../usePatientList';

describe('Test usePatientList-hook', () => {
  const store = mockStore();

  beforeEach(() => {
    jest
      .spyOn(apiCaller, 'apiCaller')
      .mockImplementation(() => Promise.resolve(fetchPatentsResponseMock));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return patients list', async () => {
    const { result } = renderHook(() => usePatientList(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      ),
    });

    await waitFor(() => {
      expect(map(store.getActions(), 'type')).toContain(
        fetchPatients.fulfilled.type,
      );
    });

    expect(result.current.patients).toEqual(fetchPatentsResponseMock);
    expect(result.current.loading).toBeFalsy();
  });
});
