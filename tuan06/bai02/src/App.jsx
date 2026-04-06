import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { themeState } from '../recoil/ThemeStorage';
import ThemeToggler from '../components/ThemeToggler';
import './App.css';

function App() {
  const theme = useRecoilValue(themeState);
  
  return (
      <div className={`app-container ${theme}`}>
        <div className="content">
          <h1>Chế độ: {theme === 'light' ? 'Sáng ' : 'Tối '}</h1>
          <ThemeToggler />
        </div>
      </div>
  );
}
export default App;