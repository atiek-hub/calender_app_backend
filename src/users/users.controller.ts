import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.user(Number(id));
  }

  @Get()
  async users(): Promise<User[]> {
    return this.usersService.users();
  }

  @Post()
  async createUser(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<User> {
    return this.usersService.createUser(userData);
  }
}
