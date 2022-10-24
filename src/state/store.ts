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
import {patientReducer, singlePatientReducer} from './ducks/patients/patients.reducer';
import { sensorReducer } from './ducks/sensors/sensor.reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  patients: patientReducer,
  singlePatient: singlePatientReducer,
  sensorData: sensorReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(logger)
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
