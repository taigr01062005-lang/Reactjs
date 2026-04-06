// ThemeToggler.jsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/ThemeStorage';

const ThemeToggler = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className="toggle-btn">
      Chuyển sang chế độ {theme === 'light' ? 'Tối' : 'Sáng'}
    </button>
  );
};

export default ThemeToggler;