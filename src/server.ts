import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import  routes  from './routes';
// import { connectDb } from './db';
import MongoClient from './modules/mongo';
import bodyParser from 'body-parser';
import morgan from 'morgan';

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
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use('/api', routes);

app.use(morgan(MORGAN_LOG));

const client = MongoClient.getInstance(`${DB_HOST}:${DB_PORT}/${DB_NAME}`);
client.connect().then(() => console.log('Connected to DB')).catch((error) => console.error(error));

app.listen(port, () => console.log(`Server running on port ${port}`));