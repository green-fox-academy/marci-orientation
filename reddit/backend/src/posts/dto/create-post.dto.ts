import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  url: string;
  @IsNotEmpty()
  timestamp: number;
  @IsNotEmpty()
  score: number;
  @IsNotEmpty()
  owner: string;
  @IsNotEmpty()
  vote: number;
}
