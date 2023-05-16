import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducers';

import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
