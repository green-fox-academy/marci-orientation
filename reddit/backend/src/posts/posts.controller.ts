import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { GetPostsDto } from '../posts/dto/get-posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @Get('/')
  getAllPosts(getPostsDto: GetPostsDto) {
    return this.service.getPosts(getPostsDto);
  }
}
