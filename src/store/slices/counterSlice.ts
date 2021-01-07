import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number
}

const initialState = { value: 0 } as CounterState;

/* eslint-disable no-param-reassign */
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
