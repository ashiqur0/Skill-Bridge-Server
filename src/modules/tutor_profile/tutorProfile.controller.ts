import { Request, Response } from "express";
import { tutorProfileService } from "./tutorProfile.service";

const createTutorProfile = async (req: Request, res: Response) => {
    try {
        const result = await tutorProfileService.createTutorProfile(req.body);
        res.status(201).json(result);
    } catch(error: any) {
        res.status(500).json({ message: "Failed to create tutor profile", error: error.message });
    }
}

export const tutorProfileController = {
    createTutorProfile
}