import { atom } from 'recoil';

export const USER_DATA = atom({
  default: {
    id: 0,
    userName: '',
    name: '',
    email: '',
    phoneNumber: '',
    iat: 0,
    exp: 0,
  },
  key: 'USER_DATA',
});

export const USER_TOKEN = atom({
  default: '',
  key: 'USER_TOKEN',
});
