import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import bcrypt from "bcrypt"

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

}
