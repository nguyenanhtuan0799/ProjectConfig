import {combineReducers} from '@reduxjs/toolkit';
import postSlice from './postSlice';

export const reducer = combineReducers({
  post: postSlice.reducer,
});
