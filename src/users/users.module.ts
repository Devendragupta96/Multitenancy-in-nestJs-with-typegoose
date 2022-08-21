import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './users.model';
import { MongooseConfigService } from '../config/mongoose-config-service';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})

export class UsersModule { }
