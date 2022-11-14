import React from 'react';
import * as storage from '../../utils/storage';
import { cloneDeep, map, set } from 'lodash';
import * as apiCaller from '../../utils/apiCaller';
import { AuthState } from '../../state/ducks/auth/auth.interface';
import { initialState } from '../../state/ducks/auth/auth.reducer';
import { initialStore, mockStore } from '../../state/mocks/store.mock';
import useSilentRefresh, { REFRESH_INTERVAL_MS } from '../useSilentRefresh';
import { act, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { refresh, signOutUser } from '../../state/ducks/auth/auth.actions';

jest.useFakeTimers();

const mockTokens = {
  accessToken: 'test token',
  idToken: 'test token',
  refreshToken: 'test token',
  expiresIn: 132,
};

describe('Test useilentRefresh-hook', () => {
  const setIntervalSpy = jest.spyOn(global, 'setInterval');
  const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

  beforeEach(() => {
    jest
      .spyOn(storage, 'retrieveToken')
      .mockImplementation(() => Promise.resolve('saopkdas'));
    jest
      .spyOn(storage, 'storeTokens')
      .mockImplementation(() => Promise.resolve());
    jest
      .spyOn(storage, 'removeTokens')
      .mockImplementation(() => Promise.resolve());
    jest
      .spyOn(apiCaller, 'apiCaller')
      .mockImplementation(() => Promise.resolve(mockTokens));
  });

  it('should silent refresh if signed in', async () => {
    const authState: AuthState = {
      ...initialState,
      isSignedIn: true,
      authUser: { email: 'test@test.no', id: 'fadpokqw' },
    };
    const store = mockStore(set(cloneDeep(initialStore), 'auth', authState));
    renderHook(() => useSilentRefresh(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      ),
    });

    const expectedActions = [refresh.fulfilled.type];
    await waitFor(() => {
      expect(map(store.getActions(), 'type')).toStrictEqual(expectedActions);
    });

    expect(setIntervalSpy).toBeCalledTimes(1);
  });

  it('should not silent refresh if signed out', async () => {
    const store = mockStore(initialStore);
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    renderHook(() => useSilentRefresh(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      ),
    });
    expect(map(store.getActions(), 'type')).toEqual([]);
    expect(dispatchSpy).not.toBeCalled();
    expect(setIntervalSpy).not.toBeCalled();
  });
});
