import { Injectable, NotFoundException } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { GetPostsDto } from './dto/get-posts.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRepository } from './post.repository';
import { UpdateResult } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostRepository) {}

  async getPosts(post: GetPostsDto): Promise<PostEntity[]> {
    return this.postRepository.find(post);
  }

  async getPostById(id: number): Promise<PostEntity> {
    const found = await this.postRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Post with ID '${id}' not found`);
    }
    return found;
  }

  async createPost(createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postRepository.createPost(createPostDto);
  }

  async upVotePost(post: GetPostsDto): Promise<UpdateResult> {
    return await this.postRepository.update(post.vote, post);
  }
}
