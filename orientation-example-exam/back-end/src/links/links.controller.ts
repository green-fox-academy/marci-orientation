import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Redirect,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkRepository } from './links.repository';
import { LinkDto } from './interfaces/links.dto';
import { Link } from './links.entity';
import { DeleteResult } from 'typeorm';

@Controller('links')
export class LinksController {
  constructor(
    @InjectRepository(LinkRepository)
    private readonly linkRepository: LinkRepository,
  ) {}

  @Get('/api/links')
  async findAll(getAllLinks: LinkDto): Promise<Link[]> {
    return this.linkRepository.getAllLinks(getAllLinks);
  }

  @Get('/a/:alias')
  @Redirect('/a/:url')
  async findOne(@Param('alias') alias: string) {
    const myLink = this.linkRepository.getLink(alias);
    // console.log(res.get((await myLink).url));
    // res.redirect((await myLink).url);
    return myLink;
  }

  @Post('/save-link')
  @UsePipes(ValidationPipe)
  async create(
    @Body() linkDto: LinkDto,
  ): Promise<
    {
      secretCode: number;
      id: number;
      url: string;
      alias: string;
      hitCount: number;
    } & Link
  > {
    return this.linkRepository.createLink(
      linkDto,
      Math.floor(1000 + Math.random() * 9000),
      linkDto.alias,
    );
  }

  @Delete('api/links/:id')
  async delete(
    @Param('id') id: number,
    @Body('secretCode') secretCode: number,
    linkDto: LinkDto,
  ): Promise<DeleteResult> {
    return this.linkRepository.deleteLink(id, secretCode, linkDto);
  }
}
