import { atom } from 'recoil';

export const isSocialLoginDrawerOpen = atom<boolean>({
  key: 'isSocialLoginDrawerOpen',
  default: false,
});

export const isNavDrawerOpen = atom<boolean>({
  key: 'isNavDrawerOpen',
  default: false,
});
