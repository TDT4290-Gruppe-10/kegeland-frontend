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
import { headerReducer, sidePanelReducer } from './ducks/layout/layout.reducer';
import {patientReducer, singlePatientReducer} from './ducks/patients/patients.reducer';
import { answerReducer, questionnairesIdReducer } from './ducks/questionnaires/questionnaries.reducer';
import { sensorReducer } from './ducks/sensors/sensors.reducer';

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
  sensorData: sensorReducer,
  questionnaries: questionnairesIdReducer,
  answer: answerReducer,
  headerText: headerReducer,
  sidePanel: sidePanelReducer
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
