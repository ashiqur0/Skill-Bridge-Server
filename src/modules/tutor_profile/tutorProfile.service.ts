import { prisma } from "../../lib/prisma"

const createTutorProfile = async (tutorData: any) => {
    const result = await prisma.tutorProfile.create({
        data: tutorData
    });
    return result;
}

export const tutorProfileService = {
    createTutorProfile
}