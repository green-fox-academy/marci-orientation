import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class UserCredentialsDto {
  @MinLength(4, { message: 'Username must contain more than 4 characters.' })
  @MaxLength(15, { message: 'Username must contain less than 15 characters.' })
  username: string;
  @IsEmail()
  email: string;
}
