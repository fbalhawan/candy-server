import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import  routes  from './routes';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

dotenv.config();

const {
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;

const MORGAN_LOG = process.env.MORGAN_LOG || 'dev';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan(MORGAN_LOG));

app.use(bodyParser.urlencoded({
    extended: true
  }));
  

  app.use('/api', routes);

// Form the connection URL
const dbUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Connect to MongoDB using Mongoose
mongoose.connect(dbUrl)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
  });
  