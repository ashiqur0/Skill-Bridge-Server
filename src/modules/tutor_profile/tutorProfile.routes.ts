import express from 'express';
import { tutorProfileController } from './tutorProfile.controller';

const router = express.Router();

router.post('/', tutorProfileController.createTutorProfile
)

export const tutorProfileRoutes = router;