import { GradeEnum, RoleEnum } from 'src/common';

export interface IUser {
    name: string;
    username: string;
    rollNumber: number;
    password: string;
    profilePicture?: string;
    role: RoleEnum;
    // grade: GradeEnum;
    marksObtained?: number;
    totalMarks?: number;
    percentage?: number;
}
