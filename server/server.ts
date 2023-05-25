import express, { Express } from 'express';
import next from 'next';

import dbconnection from './db';
import pathHandler from './handler';
import setMiddleware from './middleware';

const dev: boolean = process.env.NODE_ENV !== 'production';
const hostname: string = 'localhost';
const port: number = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server: Express = express();

    setMiddleware(server);
    dbconnection();
    pathHandler(server);

    server.get('*', (req, res) => {
      handle(req, res);
    });

    server
      .listen(port, () => {
        console.log(`server started at port ${port}...`);
      })
      .on('error', (e) => {
        console.log('something wrong!!!');
      });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
