import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistsModule } from './playlists/playlists.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PlaylistsModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      username: 'marci',
      password: 'password',
      database: 'doom-player',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
