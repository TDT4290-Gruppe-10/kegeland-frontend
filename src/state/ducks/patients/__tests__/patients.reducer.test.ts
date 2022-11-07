import { store } from '../../../store';
import { apiCaller } from '../../../../utils/apiCaller';
import { fetchPatientById, fetchPatients } from '../patients.actions';
import { clearPatientsState, initialState } from '../patients.reducer';
import fetchPatentByIdResponse from '../mocks/fetchPatientByIdResponse.mock';
import fetchPatentsResponse from '../mocks/fetchPatientsRespnse.mock';

jest.mock('../../../../utils/apiCaller');

describe('Test patients slice', () => {
  it('Should return initial state', () => {
    const state = store.getState().patients;
    expect(state).toEqual(initialState);
  });

  it('clearPatientsState should set initial error', async () => {
    (apiCaller as any).mockImplementation(() => Promise.reject(new Error()));
    store.dispatch(clearPatientsState());
    const state = store.getState().patients;
    expect(state).toEqual(initialState);
  });

  it('fetchPatientByid/rejected should set state error', async () => {
    (apiCaller as any).mockImplementation(() => Promise.reject(new Error()));
    await store.dispatch(fetchPatientById('123456'));
    const state = store.getState().patients;
    expect(state.error).toBeTruthy();
  });

  it('fetchPatientById/fulfilled should set patient state', async () => {
    (apiCaller as any).mockImplementation(() =>
      Promise.resolve(fetchPatentByIdResponse),
    );
    await store.dispatch(fetchPatientById('123'));
    const state = store.getState().patients;
    expect(state.patient).toEqual(fetchPatentByIdResponse);
    expect(state.loading).toBeFalsy();
    expect(state.error).toBeFalsy();
  });

  it('fetchPatients/fulfilled should set patients state', async () => {
    (apiCaller as any).mockImplementation(() =>
      Promise.resolve(fetchPatentsResponse),
    );
    await store.dispatch(fetchPatients());
    const state = store.getState().patients;

    expect(state.data).toEqual(fetchPatentsResponse);
    expect(state.loading).toBeFalsy();
    expect(state.error).toBeFalsy();
  });

  it('fetchPatientById/rejected should set error', async () => {
    (apiCaller as any).mockImplementation(() => Promise.reject(new Error()));
    await store.dispatch(fetchPatientById('123'));
    const state = store.getState().patients;

    expect(state.loading).toBeFalsy();
    expect(state.error).toBeTruthy();
  });

  it('fetchPatients/rejected should set error', async () => {
    (apiCaller as any).mockImplementation(() => Promise.reject(new Error()));
    await store.dispatch(fetchPatients());
    const state = store.getState().patients;

    expect(state.loading).toBeFalsy();
    expect(state.error).toBeTruthy();
  });
});
