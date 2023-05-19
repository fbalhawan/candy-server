import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import  routes  from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json
app.use('/api', routes); // Use the routes

app.listen(port, () => console.log(`Server running on port ${port}`));