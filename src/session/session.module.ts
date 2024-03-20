import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60m" }
    })
  ],
  controllers: [SessionController],
  providers: [UsersService]
})
export class SessionModule {}
