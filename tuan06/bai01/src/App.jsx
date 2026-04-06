import React from 'react';
import { RecoilRoot } from 'recoil';
import ComponentA from './components/ComponentA';
import ComponentB from './components/componentB';

function App() {
  return (
    <RecoilRoot>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Recoil Counter Example</h1>
        <ComponentA />
        <ComponentB />
      </div>
    </RecoilRoot>
  );
}

export default App;