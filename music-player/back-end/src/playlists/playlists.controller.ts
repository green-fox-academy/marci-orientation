import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PlayListsService } from './playlists.service';
import { PlayList } from './playlist.entity';
import { DeleteResult } from 'typeorm';

@Controller('playlists')
export class PlayListsController {
  constructor(private playlistsService: PlayListsService) {}

  @Get()
  index(): Promise<PlayList[]> {
    return this.playlistsService.findAll();
  }

  @Get('playlist-tracks')
  async getAllTracks(
    @Param('playlist_id') playlist_id: number,
  ): Promise<PlayList[]> {
    return this.playlistsService.findAll();
  }

  @Post()
  async createPlaylist(@Body() playListData: PlayList) {
    return this.playlistsService.create(playListData);
  }

  @Post('playlist-tracks/:playlist_id')
  async addToPlayList(
    @Param('playlist_id') playlist_id: number,
    @Body() playlistData: PlayList,
  ): Promise<PlayList> {
    playlistData.id = Number(playlist_id);
    console.log(`Created ${playlistData.id}`);
    return this.playlistsService.create(playlistData);
  }

  @Delete()
  async delete(
    @Param('playlist_id') playlist_id: number,
  ): Promise<DeleteResult> {
    return this.playlistsService.delete(playlist_id);
  }

  @Delete('playlist-tracks/:playlist_id/:track_id')
  async deleteById(
    @Param('playlist_id') playlist_id: number,
    @Param('track_id') track_id: number,
  ): Promise<DeleteResult> {
    return this.playlistsService.deleteById(track_id);
  }
}
