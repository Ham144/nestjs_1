import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {
  @Post('/auth')
  login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): string {
    return `${email} : ${password}`;
  }

  @Get('/profile')
  getProfile(): object {
    const profile = {
      id: 1,
      username: 'joko',
      email: 'joko@me.com',
      isAdmin: true,
      phone: '08899',
    };

    return profile;
  }
  @Patch()
  updateProfile(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('phone') phone: string,
    @Body('isAdmin') isAdmin: boolean,
    @Body('email') emali: string,
  ): string {
    return 'profile successfully updated!';
  }

  @Post('/register')
  register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Body('isAdmin') isAdmin: boolean,
  ): object {
    if (!username || !password || !email || !phone) {
      return {
        statusbar: 400,
        message: 'required data null',
      };
    }

    const result = {
      username,
      email,
      phone,
      isAdmin: isAdmin ? isAdmin : false,
    };

    return {
      message: 'you are registered now',
      data: result,
    };
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') id: number): string {
    return 'successfully delete such user of the id';
  }
}
