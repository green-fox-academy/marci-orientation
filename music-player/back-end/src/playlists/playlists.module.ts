import { Module } from '@nestjs/common';
import { PlayListsService } from './playlists.service';
import { PlayListsController } from './playlists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayList } from './playlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayList])],
  providers: [PlayListsService],
  controllers: [PlayListsController],
})
export class PlaylistsModule {}
