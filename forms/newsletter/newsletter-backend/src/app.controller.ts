import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserCredentialsDto } from './user/user.credentials.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async findAll(): Promise<UserCredentialsDto[]> {
    return this.appService.findAll();
  }

  @Post('/signup')
  @UsePipes(ValidationPipe)
  async getHello(
    @Res() res: Response,
    @Body() userCredentialsDto: UserCredentialsDto
  ): Promise<void> {
    res.json(
      `Hello ${userCredentialsDto.username}, you signed up with your e-mail account: ${userCredentialsDto.email}`
    );
    this.appService.getHello(userCredentialsDto);
  }
}
