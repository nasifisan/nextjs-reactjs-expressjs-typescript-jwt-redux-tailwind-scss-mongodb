import { Express } from 'express';

import exRouter from './src/test/routes/example';
import errRouter from './src/test/routes/error';
import nwRouter from './src/test/routes/newexample';
import userRouter from './src/users/routes/userRegistration';

const pathHandler = (server: Express) => {
  server.use('/api', exRouter);
  server.use('/api', nwRouter);
  server.use('/api/user', userRouter);

  server.use('/api/*', errRouter);
};

export default pathHandler;
