import { rPost } from './post.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: Repository<rPost>);
    findAll(): Promise<rPost[]>;
    findOne(id: number): Promise<rPost>;
    create(post: rPost): Promise<rPost>;
    update(post: rPost): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
