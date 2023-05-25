import { HttpClient } from './axiosClient';

export class AuthService {
  httpClient: any;

  constructor() {
    this.httpClient = HttpClient;
  }

  async getToLogin(data: any): Promise<any> {
    const bodyPrams = new URLSearchParams();

    bodyPrams.append('email', data.email);
    bodyPrams.append('password', data.password);
    bodyPrams.append('grant_type', 'login');

    return await this.httpClient.request({
      method: 'post',
      url: '/api/user/token',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        grant_type: 'login',
        email: data.email,
        password: data.password,
      },
    });
  }

  async getAnonymousToken(): Promise<any> {
    const bodyPrams = new URLSearchParams();

    // bodyPrams.append('email', data.email);
    // bodyPrams.append('password', data.password);
    bodyPrams.append('grant_type', 'anonymous');

    return await this.httpClient.request({
      method: 'post',
      url: '/api/user/token',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        grant_type: 'anonymous',
      },
    });
  }

  async renewAccessToken(refreshToken: any): Promise<any> {
    const bodyPrams = new URLSearchParams();

    // bodyPrams.append('email', data.email);
    // bodyPrams.append('password', data.password);
    bodyPrams.append('grant_type', 'refresh');

    return await this.httpClient.request({
      method: 'post',
      url: '/api/user/token',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        grant_type: 'refresh',
        refresh_token: refreshToken,
      },
    });
  }

  async goToLogout(): Promise<any> {}
}
