import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
    MinLength
} from 'class-validator';
import { GradeEnum } from 'src/common';

export class createUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    username: string;

    @IsNumber()
    @IsNotEmpty()
    rollNumber: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(128)
    password: string;

    @IsString()
    @IsOptional()
    profilePicture?: string;

    // @IsEnum(GradeEnum)
    // @IsNotEmpty()
    // grade: GradeEnum;
}
