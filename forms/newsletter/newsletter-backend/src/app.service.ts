import { Injectable } from '@nestjs/common';
import { UserCredentialsDto } from './user/user.credentials.dto';

@Injectable()
export class AppService {
  private readonly users: UserCredentialsDto[] = [];

  getHello(userCredentialsDto: UserCredentialsDto) {
    this.users.push(userCredentialsDto);
  }

  findAll(): UserCredentialsDto[] {
    return this.users;
  }
}
