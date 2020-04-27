import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rPost } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([rPost])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
