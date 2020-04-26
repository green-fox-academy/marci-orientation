import { EntityRepository, Repository } from 'typeorm';
import { PostEntity } from './post.entity';
import { GetPostsDto } from './dto/get-posts.dto';
import { CreatePostDto } from './dto/create-post.dto';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  async getPosts(getPostsDto: GetPostsDto): Promise<PostEntity[]> {
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    return await query.getMany();
  }

  async createPost(createPostDto: CreatePostDto): Promise<PostEntity> {
    const { id, title, url, timestamp, score, owner, vote } = createPostDto;

    const post = new PostEntity();
    post.id = id;
    post.title = title;
    post.url = url;
    post.timestamp = timestamp;
    post.score = score;
    post.owner = owner;
    post.vote = vote;

    await post.save();

    return post;
  }
}
