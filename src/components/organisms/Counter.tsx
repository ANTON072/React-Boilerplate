import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { decrement, increment, incrementByAmount } from 'store/slices/counterSlice';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <h2>Counter</h2>
      <div>
        current:
        {value}
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement

        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
        >
          incrementByAmount

        </button>
      </div>
    </div>
  );
};

export default Counter;
