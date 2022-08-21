import { Body, Controller, Get, Post, Scope } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller({
  
    path: 'users',
    scope: Scope.REQUEST,
  
})
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('')
  async saveUser(@Body() data: User) {
    const result = this.usersService.saveUser(data);
    return {
      success: true,
      payload: result
    }
  }
}
