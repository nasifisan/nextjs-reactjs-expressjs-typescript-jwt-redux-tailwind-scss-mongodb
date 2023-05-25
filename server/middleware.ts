import express, { Express } from 'express';

const setMiddleware = (server: Express) => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
};

export default setMiddleware;
