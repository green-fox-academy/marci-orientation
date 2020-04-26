import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { GetPostsDto } from '../posts/dto/get-posts.dto';
import { PostEntity } from './post.entity';
import { CreatePostDto } from '../posts/dto/create-post.dto';
import { UpdateResult } from 'typeorm';

@Controller('posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @Get()
  getAllPosts(getPostsDto: GetPostsDto): Promise<PostEntity[]> {
    return this.service.getPosts(getPostsDto);
  }

  @Get('/:id')
  getPostById(@Param('id') id: number): Promise<PostEntity> {
    return this.service.getPostById(id);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.service.createPost(createPostDto);
  }

  @Put('/:id/:action')
  upVotePost(
    @Param('action') action: string,
    @Param('id') id: number,
    @Body() getPostsDto: GetPostsDto,
  ): Promise<UpdateResult> {
    action === 'upvote' ? getPostsDto.vote + 1 : getPostsDto.vote - 1;

    return this.service.upVotePost(getPostsDto);
  }
}
