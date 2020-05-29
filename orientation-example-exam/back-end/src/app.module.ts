import { Module } from '@nestjs/common';
import { LinksModule } from './links/links.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    LinksModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'front-end'),
      renderPath: '/',
    }),
  ],
})
export class AppModule {}
