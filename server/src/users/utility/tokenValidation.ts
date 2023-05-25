import jwtDecode from 'jwt-decode';
import { DecodedToken } from '../../../../shared/utils/auth';

export class TokenValidation {
  private accessToken;
  private tokenInfo: DecodedToken;

  constructor(token: string) {
    this.accessToken = token;
    this.tokenInfo = jwtDecode(token ?? '');
  }

  isExpired = (exp: number): boolean => {
    const x = Date.now() / 1000;
    return exp < x;
  };

  isTokenValid = (): boolean => {
    const time: boolean = !this.isExpired;

    return time;
  };
}
