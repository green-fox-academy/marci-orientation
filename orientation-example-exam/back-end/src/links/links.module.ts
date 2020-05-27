import { Module } from '@nestjs/common';
import { LinksController } from './links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './links.entity';
import { LinkRepository } from './links.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Link, LinkRepository])],
  controllers: [LinksController],
})
export class LinksModule {}
