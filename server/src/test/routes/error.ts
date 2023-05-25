import express, { Request, Response } from 'express';

const errRouter = express.Router();

errRouter.get("/", (req: Request, res: Response, next) => {
  return res.status(404).send({Error: "An error occured."});
});

export default errRouter;
