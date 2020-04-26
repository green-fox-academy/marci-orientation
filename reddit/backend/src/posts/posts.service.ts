import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
import { GetPostsDto } from './dto/get-posts.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity) private postEntity: Repository<PostEntity>,
  ) {}

  async getPosts(post: GetPostsDto): Promise<PostEntity[]> {
    return this.postEntity.find(post);
  }
}
