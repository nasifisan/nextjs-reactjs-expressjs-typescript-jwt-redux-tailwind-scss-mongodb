import express, { Request, Response } from 'express';

const nwRouter = express.Router();

nwRouter.get("/newexample", (req: Request, res: Response, next) => {
  return res.status(200).send({name: "Hello to new me :)."});
});

export default nwRouter;
