import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './ducks/auth/auth.reducer';
import patientsReducer from './ducks/patients/patients.reducer';
import questionnairesReducer from './ducks/questionnaires/questionnaires.reducer';
import { sensorReducer } from './ducks/sensors/sensors.reducer';
import sessionsReducer from './ducks/sessions/sessions.reducer';
import settingsReducer from './ducks/settings/settings.reducer';

/**
 * Configuration for redux-persist.
 * Redux-persist is responsible for maintaining the state
 * between sessions.
 */
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['settings', 'auth'],
};

// Initiate the root reducer
export const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  patients: patientsReducer,
  sensors: sensorReducer,
  sessions: sessionsReducer,
  questionnaires: questionnairesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Check if development-environment is enabled

const isDev = !['production', 'test'].includes(process.env.NODE_ENV || '');

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    isDev
      ? getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(logger)
      : getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
  devTools: isDev,
});

// Create persistor for persisting state
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
