import { IsEmail, IsString, IsNotEmpty } from "class-validator"


export class AuthenticateDto {
    @IsNotEmpty()
    @IsEmail()
    email: string
    
    @IsNotEmpty()
    @IsString()
    password: string 
}