import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import jwt_decode from 'jwt-decode';
import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { ATOM_USER_DATA, ATOM_USER_TOKEN } from '@/storage/atoms';

export type UserTokenData = {
  id: number;
  userName: string;
  name: string;
  email: string;
  phoneNumber: string;
  iat: number;
  exp: number;
};

const useAuth = () => {
  const [userData, setUserData] = useAtom(ATOM_USER_DATA);
  const [userToken, setUserToken] = useAtom(ATOM_USER_TOKEN);

  const resetUserToken = useResetAtom(ATOM_USER_TOKEN);
  const resetUserData = useResetAtom(ATOM_USER_DATA);

  const router = useRouter();

  const handleSetUserData = (user: UserTokenData, token: string): void => {
    setUserData(user);
    setUserToken(token);
  };

  const handleSignIn = (token: string): any => {
    const userData = jwt_decode(token) as UserTokenData;

    setCookie(undefined, 'session.token', token, {
      maxAge: 60 * 60 * 12, // 12 hours
      path: '/',
    });

    setCookie(undefined, 'session.user', JSON.stringify(userData), {
      maxAge: 60 * 30 * 1, // 12 hours
      path: '/',
    });

    setUserToken(token);
    setUserData(userData);

    router.push('/home');
  };

  const handleSignOut = (): void => {
    destroyCookie(undefined, 'session.token', { path: '/' });
    destroyCookie(undefined, 'session.user', { path: '/' });
    resetUserToken();
    resetUserData();
    router.push('/login');
  };

  return {
    user: userData,
    handleSignIn,
    handleSignOut,
    handleSetUserData,
  };
};

export default useAuth;
