import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import  routes  from './routes';
import { connectDb } from './db';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);
connectDb();
app.listen(port, () => console.log(`Server running on port ${port}`));