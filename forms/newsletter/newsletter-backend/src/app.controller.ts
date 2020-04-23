import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserCredentialsDto } from './user/user.credentials.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async findAll(): Promise<UserCredentialsDto[]> {
    return this.appService.findAll();
  }

  @Post('/signup')
  async getHello(
    @Body() userCredentialsDto: UserCredentialsDto
  ): Promise<void> {
    this.appService.getHello(userCredentialsDto);
  }
}
