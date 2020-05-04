import { rPost } from './post.entity';
import { PostsService } from './posts.service';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    index(): Promise<rPost[]>;
    findOne(id: number): Promise<rPost>;
    create(postData: rPost): Promise<rPost>;
    update(id: number, postData: rPost): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
