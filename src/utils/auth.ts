import { GetServerSidePropsContext } from 'next';

import { parseCookies, destroyCookie } from 'nookies';
import { UserTokenData } from '@/hooks/useAuth';

function destroyAllCookies(): void {
  destroyCookie(undefined, 'session.token', { path: '/' });
  destroyCookie(undefined, 'session.user', { path: '/' });
}

const redirectLoginObject = {
  redirect: {
    destination: '/login',
  },
};

const redirectHomeObject = {
  redirect: {
    destination: '/home',
  },
};

export function authPrivate(cx: GetServerSidePropsContext) {
  const { 'session.token': token } = parseCookies(cx);
  const { 'session.user': userDataStr } = parseCookies(cx);

  if (!token && !userDataStr) {
    destroyAllCookies();
    return redirectLoginObject;
  }

  const parsedUserData = JSON.parse(userDataStr) as UserTokenData;

  if (Date.now() >= parsedUserData.exp * 1000) {
    destroyAllCookies();
    return redirectLoginObject;
  }

  return {
    props: {
      user: parsedUserData,
    },
  };
}

export function authPublic(cx: GetServerSidePropsContext) {
  const { 'session.token': token } = parseCookies(cx);
  const { 'session.user': userDataStr } = parseCookies(cx);

  if (!!token && !!userDataStr) {
    const parsedUserData = JSON.parse(userDataStr) as UserTokenData;
    if (Date.now() < parsedUserData.exp * 1000) {
      return redirectHomeObject;
    }
  }

  return {
    props: {},
  };
}
