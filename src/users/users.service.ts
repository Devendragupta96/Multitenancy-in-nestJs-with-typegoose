import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) { }

  async saveUser(data: Partial<User>) {
    try {
      const newUser = new this.userModel(data);
      newUser.save()

    } catch (error) {
      Logger.log(error)
    }
  }


}
