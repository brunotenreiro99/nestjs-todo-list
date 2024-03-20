import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as argon2 from "argon2";

@Injectable()
export class UsersService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = await argon2.hash(createUserDto.password)

    return await this.databaseService.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword
      }
    })
  }

  async findOne(id: string) {
    return await this.databaseService.user.findUnique({
      where: {
        id
      }
    })
  }

  async findOneByEmail(email: string) {
    return await this.databaseService.user.findUnique({
      where: {
        email
      }
    })
  }
}
