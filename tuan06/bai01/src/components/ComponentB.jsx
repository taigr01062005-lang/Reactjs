import React from 'react';
import { useSetRecoilState } from 'recoil';
import { counterState } from '../atom/CounterState';

const ComponentB = () => {
  const setCount = useSetRecoilState(counterState);

  return (
    <div>
      <h3>Component B (Actions)</h3>
      <button onClick={() => setCount((old) => old + 1)}>Tăng</button>
      <button onClick={() => setCount((old) => old - 1)} style={{ marginLeft: '10px' }}>Giảm</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
};

export default ComponentB;