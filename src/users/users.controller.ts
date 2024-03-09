import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users') // this controller handles the "/users" route and its child route(s)
export class UsersController {
  /*
  POST    /users
  PATCH   /users/:id
  DELETE  /users/:id
  */

  @Get() // GET /users
  findAll() {
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
}
