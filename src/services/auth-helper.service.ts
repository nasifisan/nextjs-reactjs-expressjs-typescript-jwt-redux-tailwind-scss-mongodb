import { setCookie, getCookie, deleteCookie } from 'cookies-next';

import { TokenInfo } from '../../shared/utils/auth';
import { AuthService } from './auth.service';

import { User } from '@/models/User';
import { setUser } from '@/redux/slices/AuthSlice';

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';
const EXPIRE_TIME_KEY = 'EXPIRES_IN';

export const defaultUser: User = {
  UserId: '',
  Name: '',
  FirstName: '',
  LastName: '',
  Email: '',
  Phone: '',
};

export const setAuthCredentials = (
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
  dispatch: Function
) => {
  const tokenInfo = new TokenInfo(accessToken);
  const details: User = tokenInfo.getUserDetails();
  // updateUser(tokenInfo);
  dispatch(setUser(details));
  setCookie(ACCESS_TOKEN_KEY, accessToken);
  setCookie(REFRESH_TOKEN_KEY, refreshToken);
  setCookie(EXPIRE_TIME_KEY, expiresIn);
};

const getAuthCredentials = (accessToken: string): User => {
  const tokenInfo: User = new TokenInfo(accessToken);
  return tokenInfo as User;
};

export const createSession = (): User => {
  const token = getCookie(ACCESS_TOKEN_KEY) as string;
  if (!token) return defaultUser;

  return getAuthCredentials(token) as User;
};

export const goToLogin = async (data: any, dispatch: Function) => {
  try {
    const authService = new AuthService();
    const response = await authService.getToLogin(data);

    if (response?.data?.data?.access_token) {
      const accessToken = response?.data?.data?.access_token;
      const refreshToken = response?.data?.data?.refresh_token;
      const expiresIn = 0;

      setAuthCredentials(
        accessToken,
        refreshToken,
        expiresIn,
        dispatch
      );
    }
  } catch {
    throw Error();
  }
};

export const getRefreshedSession = async (dispatch: Function) => {
  try {
    const authService = new AuthService();
    const refreshToken = getCookie(REFRESH_TOKEN_KEY);
    const response = await authService.renewAccessToken(refreshToken);

    if (response?.data?.data?.access_token) {
      const accessToken = response?.data?.data?.access_token;
      const refreshToken = response?.data?.data?.refresh_token;
      const expiresIn = 0;

      setAuthCredentials(
        accessToken,
        refreshToken,
        expiresIn,
        dispatch
      );
    }

    return response;
  } catch (err) {
    return null;
  }
};

export const getAnonymousSession = async (dispatch: Function) => {
  try {
    const authService = new AuthService();
    const response = await authService.getAnonymousToken();

    if (response?.data?.data?.access_token) {
      const accessToken = response?.data?.data?.access_token;
      const refreshToken = response?.data?.data?.refresh_token;
      const expiresIn = 0;

      setAuthCredentials(
        accessToken,
        refreshToken,
        expiresIn,
        dispatch
      );
    }

    return response;
  } catch (err) {
    return null;
  }
};

export const gotToLogout = () => {
  deleteCookie(ACCESS_TOKEN_KEY);
  deleteCookie(REFRESH_TOKEN_KEY);
  deleteCookie(EXPIRE_TIME_KEY);
  // getAnonymousSession(dispatch);
  window.location.href = '';
};
