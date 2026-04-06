
import { atom } from 'recoil';

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
  default: 'light',
  effects: [localStorageEffect('app_theme')], 
});