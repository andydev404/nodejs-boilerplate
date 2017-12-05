import express from 'express';
import config from './config/variables';
import middlewares from './config/middlewares';
// import './config/db';

const app = express();

middlewares(app);

app.listen(config.PORT, err => {
  if (err) throw err;
  console.log(`
  Server running on port: ${config.PORT}
  ------
  Enviroment: ${process.env.NODE_ENV}
  `);
});
