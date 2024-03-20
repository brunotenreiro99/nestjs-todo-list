import { BadRequestException, Body, Controller, HttpCode, Post, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { AuthenticateDto } from './dto/authenticate.dto';
import { UsersService } from 'src/users/users.service';
import * as argon2 from "argon2";

import { JwtService } from '@nestjs/jwt';
import { UserRegisterDto } from './dto/user-register.dto';

@Controller('session')
export class SessionController {

    constructor(private readonly usersService : UsersService, private jwtService: JwtService) {}

    @Post('/login')
    @HttpCode(200)
    async authenticate(@Body(ValidationPipe) authenticateDto: AuthenticateDto) {

        const { email, password } = authenticateDto
        
        const isUserRegistered = await this.usersService.findOneByEmail(email)

        if (!isUserRegistered) {
            throw new UnauthorizedException('[SESSION_CONTROLLER]: The given credentails are not valid.')
        }

        try {
            const isPasswordValid = argon2.verify(isUserRegistered.password, password)
            if (!isPasswordValid) {
                throw new UnauthorizedException('[SESSION_CONTROLLER]: The given credentails are not valid.')
            }
    
            const payload = {
                userId: isUserRegistered.id
            }
    
            const accessToken = await this.jwtService.signAsync(payload)
    
            return {
                accessToken
            }
        } catch (error) {
            console.log(error)
            throw new BadRequestException('[SESSION_CONTROLLER_LOGIN]: An error occurred while trying to validate the given password')
        }
        
    }

    @Post('/register')
    async register(@Body() userRegisterDto: UserRegisterDto) {
        const user = await this.usersService.create(userRegisterDto)
        return this.authenticate({
            email: user.email,
            password: user.password
        })
    }

}
