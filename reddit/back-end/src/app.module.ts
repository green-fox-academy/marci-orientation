import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      username: 'marci',
      password: 'password',
      database: 'reddit',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../front-end'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
