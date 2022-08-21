import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseConfigService } from './config/mongoose-config-service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
