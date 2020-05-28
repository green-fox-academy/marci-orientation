import { IsNotEmpty } from 'class-validator';

export class LinkDto {
  readonly id: number;
  @IsNotEmpty({ message: 'Please provide an URL! ' })
  readonly url: string;
  @IsNotEmpty({ message: 'Please enter an alias!' })
  readonly alias: string;
  readonly hitCount: number;
  readonly secretCode: number;
}
