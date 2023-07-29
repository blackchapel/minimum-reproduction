import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GradeEnum, RoleEnum } from 'src/common';

@Schema({
    timestamps: true
})
export class User {
    @Prop({ required: true, trim: true })
    name: string;

    @Prop({
        required: true,
        trim: true,
        unique: true,
        minlength: [2, 'username too short!'],
        maxlength: [20, 'username too long!']
    })
    username: string;

    @Prop({ required: true })
    rollNumber: number;

    @Prop({
        required: true,
        select: false,
        trim: true,
        minlength: [8, 'Password too short!'],
        maxlength: [128, 'Password too long!']
    })
    password: string;

    @Prop({ required: false })
    profilePicture?: string;

    @Prop({
        type: String,
        required: true,
        enum: Object.keys(RoleEnum)
    })
    role: string;

    // @Prop({ type: String, required: true, enum: Object.keys(GradeEnum) })
    // grade: string;

    @Prop({ required: false, default: 0 })
    marksObtained?: number;

    @Prop({ required: false, default: 0 })
    totalMarks?: number;

    @Prop({ required: false, default: 0 })
    percentage?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
