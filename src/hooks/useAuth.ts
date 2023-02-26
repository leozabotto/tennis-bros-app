import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import jwt_decode from 'jwt-decode';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { USER_DATA, USER_TOKEN } from '@/storage/recoil';

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
  const [userData, setUserData] = useRecoilState<UserTokenData>(USER_DATA);
  const [userToken, setUserToken] = useRecoilState(USER_TOKEN);

  const resetUserToken = useResetRecoilState(USER_TOKEN);
  const resetUserData = useResetRecoilState(USER_DATA);

  const router = useRouter();

  useEffect(() => {
    function loadData() {
      const { 'session.token': token } = parseCookies();
      const { 'session.user': userDataStr } = parseCookies();

      if (!!token && !!userDataStr) {
        const parsedUserData = JSON.parse(userDataStr);
        setUserData(parsedUserData);
        setUserToken(token);
      }
    }

    loadData();
  }, []);

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
    router.push('/login');
    setTimeout(() => {
      destroyCookie(undefined, 'session.token', { path: '/' });
      destroyCookie(undefined, 'session.user', { path: '/' });
      resetUserToken();
      resetUserData();
    }, 1000);
  };

  return {
    user: userData,
    handleSignIn,
    handleSignOut,
  };
};

export default useAuth;
