import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState } from '../atom/CounterState';

const ComponentA = () => {
  const count = useRecoilValue(counterState);
  
  return (
    <div>
      <h3>Component A (Display)</h3>
      <p>Giá trị hiện tại: <strong>{count}</strong></p>
    </div>
  );
};

export default ComponentA;