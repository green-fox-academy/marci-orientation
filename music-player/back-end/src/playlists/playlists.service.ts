import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayList } from './playlist.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PlayListsService {
  constructor(
    @InjectRepository(PlayList)
    private playListRepository: Repository<PlayList>,
  ) {}

  async findAll(): Promise<PlayList[]> {
    return await this.playListRepository.find();
  }

  async create(playlist: PlayList): Promise<PlayList> {
    return await this.playListRepository.save(playlist);
  }

  async delete(playlist_id: number): Promise<DeleteResult> {
    return await this.playListRepository.delete(playlist_id);
  }

  async deleteById(track_id: number) {
    return await this.playListRepository.delete(track_id);
  }
}
