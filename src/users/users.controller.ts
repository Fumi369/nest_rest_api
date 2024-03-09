import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users') // this controller handles the "/users" route and its child route(s)
export class UsersController {
  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get('interns') // GET users/interns
  findAllInterns() {
    // findAll can't be used as a method name here, as it's already in use for another method.
    return [];
  }

  @Get(':id') // GET users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
