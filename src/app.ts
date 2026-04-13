import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { tutorProfileRoutes } from './modules/tutor_profile/tutorProfile.routes';

dotenv.config();

export const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/tutor-profile', tutorProfileRoutes);

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});