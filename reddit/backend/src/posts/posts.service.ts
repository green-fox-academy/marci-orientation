import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { rPost } from './post.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(rPost)
    private postRepository: Repository<rPost>
  ) {}

  async findAll(): Promise<rPost[]> {
    return await this.postRepository.find();
  }

  async findOne(id: number): Promise<rPost> {
    console.log(id);
    console.log(await this.postRepository.findOne(id));

    return await this.postRepository.findOne(id);
  }

  async create(post: rPost): Promise<rPost> {
    return await this.postRepository.save(post);
  }

  async update(post: rPost): Promise<UpdateResult> {
    return await this.postRepository.update(post.id, post);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.postRepository.delete(id);
  }
}
