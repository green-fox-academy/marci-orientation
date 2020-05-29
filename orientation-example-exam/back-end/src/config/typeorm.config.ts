import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Link } from 'src/links/links.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  username: 'marci',
  password: 'password',
  database: 'links',
  entities: [Link],
  synchronize: true,
};
