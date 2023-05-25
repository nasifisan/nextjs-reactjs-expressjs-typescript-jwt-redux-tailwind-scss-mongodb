import express, { Request, Response } from 'express';

const exRouter = express.Router();

exRouter.get("/example", (req: Request, res: Response, next) => {
  return res.status(200).send({name: "Hello to me."});
});

export default exRouter;
