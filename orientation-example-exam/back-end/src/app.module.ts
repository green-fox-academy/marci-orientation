import { Module } from '@nestjs/common';
import { LinksModule } from './links/links.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    LinksModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      username: 'marci',
      password: 'password',
      database: 'links',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'front-end'),
    }),
  ],
})
export class AppModule {}
