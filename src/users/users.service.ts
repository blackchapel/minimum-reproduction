import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas';
import { createUserDTO } from './dtos';
import { IUser } from './interfaces/user.interface';
import { RoleEnum } from 'src/common';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

    async createUser(data: createUserDTO): Promise<createUserDTO> {
        try {
            const newUser: IUser = {
                name: data.name,
                username: data.username,
                rollNumber: data.rollNumber,
                password: data.password,
                role: RoleEnum.STUDENT
            };

            const user: UserDocument = new this.model(newUser);

            await user.save();

            return user;
        } catch (error) {
            console.log(error);
            throw new HttpException(
                error.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
