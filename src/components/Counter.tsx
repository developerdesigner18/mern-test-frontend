import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/reducers/counterReducer';

function Counter(props: any) {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>Counter: {counter.value}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
