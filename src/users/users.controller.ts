import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDTO } from './dtos';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('/')
    async createUser(@Body() data: createUserDTO): Promise<createUserDTO> {
        try {
            const newUser: createUserDTO = await this.userService.createUser(
                data
            );
            return newUser;
        } catch (error) {
            console.log(error);
            throw new HttpException(
                error.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
