import express, { Request, Response } from 'express';

import {
  anonymousToken,
  refreshToken,
  register,
  token,
} from '../utility/handleRegistration';

const userRouter = express.Router();

userRouter.post(
  '/registration',
  async (req: Request, res: Response, next) => {
    try {
      const response = await register(req.body);

      return res.status(200).send({
        success: true,
        message: response,
      });
    } catch (e) {
      return res.status(500).send({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

userRouter.post(
  '/token',
  async (req: Request, res: Response, next) => {
    try {
      const { grant_type } = req.body;

      let response: any;

      if (grant_type === 'login') {
        response = await token(req.body);
      } else if (grant_type === 'refresh') {
        response = await refreshToken(req.body);
      } else if (grant_type === 'anonymous') {
        response = await anonymousToken();
      }

      if (response?.message) {
        return res.status(400).send({});
      }

      return res.status(200).send({
        success: true,
        data: response,
      });
    } catch (e) {
      return res.status(500).send({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

export default userRouter;
