import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksModule } from './links/links.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
