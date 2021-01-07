import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import counterSlice from './slices/counterSlice';

const reducer = combineReducers({
  counter: counterSlice,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
