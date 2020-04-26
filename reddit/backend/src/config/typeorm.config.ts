import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostEntity } from 'src/posts/post.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  username: 'marci',
  password: 'password',
  database: 'reddit',
  entities: [PostEntity],
  synchronize: true,
};
