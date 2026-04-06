
import { atom } from 'recoil';

// Effect giúp lưu và lấy dữ liệu từ localStorage
const localStorageEffect = key => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(savedValue);
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, newValue);
  });
};

export const themeState = atom({
  key: 'themeState',
  default: 'light', // Giá trị mặc định
  effects: [localStorageEffect('app_theme')], 
});