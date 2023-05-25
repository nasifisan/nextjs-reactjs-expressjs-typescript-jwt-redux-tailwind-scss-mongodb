const jwt = require('jsonwebtoken');

import { TokenInfo } from '../../../../shared/utils/auth';
import { getNewGuid } from '../../../../shared/common/common';
import { token_model, user_model } from '../models/user';

const SECRET = 'SECRET';

const userExistsByEmail = async (email: String) => {
  const getUser: number = await user_model
    .find({ email: email })
    .count();
  return getUser > 0;
};

const userDetailsByEmail = async (email: string) => {
  const getUser = await user_model.findOne({ email: email });

  return getUser;
};

const getRefreshToken = async (refreshToken: string) => {
  const refresh = await token_model.findOne({
    refresh_token: refreshToken,
  });

  return refresh;
};

const deleteUsedToken = async (refreshToken: string) => {
  return await token_model.deleteOne({ refresh_token: refreshToken });
};

const isTokenExpired = (time: string): boolean => {
  return false;
};

export const register = async (data: any) => {
  const { first_name, last_name, email, password } = data;

  const userExists = await userExistsByEmail(email);

  if (!userExists) {
    const date = new Date();

    const model = new user_model({
      first_name: first_name,
      last_name: last_name,
      name: first_name + ' ' + last_name,
      email: email,
      password: password,
      registration_date: date,
      phone: null,
      last_visit: null,
      is_active: false,
      avatar_url: null,
      user_id: getNewGuid(),
    });

    const response = await model.save();

    return {
      success: true,
      message: 'User has been created!',
    };
  }

  return {
    success: false,
    message: 'user already exists',
  };
};

export const token = async (data: any) => {
  const { email, password } = data;
  const isUserExists = await userExistsByEmail(email);

  if (isUserExists) {
    const userDetails = await userDetailsByEmail(email);

    if (userDetails?.password !== password) {
      return {
        success: false,
        message: 'Password/username is invalid',
      };
    }

    const user = {
      _id: userDetails?.user_id,
      name: userDetails?.name,
      first_name: userDetails?.first_name,
      last_name: userDetails?.last_name,
      email: userDetails?.email,
      phone: userDetails?.phone,
    };
    const accessToken = jwt.sign(user, SECRET, { expiresIn: 180 });
    const refreshToken = getNewGuid();

    const model = new token_model({
      access_token: accessToken,
      refresh_token: refreshToken,
      expires: 30,
      entry_date: new Date(),
    });

    const save_response = await model.save();

    return {
      success: true,
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: 10000,
    };
  } else {
    return {
      success: false,
      message: 'user is invalid',
    };
  }
};

export const refreshToken = async (data: any) => {
  const { refresh_token } = data;

  const toeknDetails = await getRefreshToken(refresh_token);

  if (toeknDetails) {
    const decoded = new TokenInfo(
      toeknDetails?.access_token as string
    );

    const user = {
      _id: decoded.UserId,
      name: decoded.Name,
      first_name: decoded.FirstName,
      last_name: decoded.LastName,
      email: decoded.Email,
      phone: decoded.Phone,
    };

    const accessToken = jwt.sign(user, SECRET, { expiresIn: 180 });
    const refreshToken = getNewGuid();

    const model = new token_model({
      access_token: accessToken,
      refresh_token: refreshToken,
      expires: 30,
      entry_date: new Date(),
    });

    await deleteUsedToken(refresh_token);

    const save_response = await model.save();

    return {
      success: true,
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: 10000,
    };
  } else {
    return {
      success: false,
      message: 'invalid token',
    };
  }
};

export const anonymousToken = async () => {
  const user = {
    _id: '0000-0000000-0000000-0000',
    name: 'anonymous',
    first_name: 'anonymous',
    last_name: 'anonymous',
    email: 'anonymous',
    phone: 'anonymous',
  };

  const accessToken = jwt.sign(user, SECRET, { expiresIn: 180 });
  const refreshToken = getNewGuid();

  const model = new token_model({
    access_token: accessToken,
    refresh_token: refreshToken,
    expires: 30,
    entry_date: new Date(),
  });

  const save_response = await model.save();

  return {
    success: true,
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: 10000,
  };
};
