import { IsEmail, IsString, IsStrongPassword, IsNotEmpty, Length,IsStrongPasswordOptions } from "class-validator"

const IsStrongPasswordOptions: IsStrongPasswordOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
}

export class UserRegisterDto {
    @IsNotEmpty()
    @Length(3, 255)
    @IsString()
    name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword(IsStrongPasswordOptions)
    password: string
}