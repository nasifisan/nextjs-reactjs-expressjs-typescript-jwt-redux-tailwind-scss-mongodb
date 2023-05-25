import { getCookie } from 'cookies-next';
import { AppProps } from 'next/app';
import { PropsWithChildren, useEffect, useState } from 'react';

import { User } from '../models/User';

import {
  REFRESH_TOKEN_KEY,
  createSession,
  defaultUser,
  getAnonymousSession,
  getRefreshedSession,
} from '@/services/auth-helper.service';
import HomePageLoading from './Skeleton/HomePageLoading';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const AuthManager = ({
  Component,
  children,
  router,
}: PropsWithChildren<AppProps>) => {
  const [can, setCan] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.Auth.user);
  const { requiresAuth = true } = Component.pageOptions || {};

  useEffect(() => {
    const startSession = async () => {
      const x = getCookie(REFRESH_TOKEN_KEY);

      if (x) {
        await getRefreshedSession(dispatch);
      }
      if (!x) {
        await getAnonymousSession(dispatch);
      }
    };

    startSession();
  }, []);

  useEffect(() => {
    if (
      requiresAuth &&
      user &&
      user.UserId === process.env.NEXT_PUBLIC_ANONYMOUS_USER_ID &&
      user.UserId !== ''
    ) {
      router.push('/login');
    }

    if (
      user &&
      user.UserId !== process.env.NEXT_PUBLIC_ANONYMOUS_USER_ID &&
      user.UserId !== ''
    ) {
      setCan(true);
    }

    if (!requiresAuth && user && user.UserId !== '') {
      setCan(true);
    }
  }, [requiresAuth, user]);

  return <>{can ? <div>{children}</div> : <HomePageLoading />}</>;
};

export default AuthManager;
