import { Link } from './links.entity';
import { EntityRepository, Repository, DeleteResult } from 'typeorm';
import { LinkDto } from './interfaces/links.dto';
import {
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';

@EntityRepository(Link)
export class LinkRepository extends Repository<Link> {
  createLink = async (linkDto: LinkDto, secretCode: number, alias: string) => {
    const found: Link = await this.findOne({ alias });
    const saveLink: Promise<{
      secretCode: number;
      id: number;
      url: string;
      alias: string;
      hitCount: number;
    } & Link> = this.save({ ...linkDto, secretCode });

    if (found) {
      throw new BadRequestException('Alias already in use');
    }
    return await saveLink;
  };

  getLink = async (alias: string) => {
    const found: Link = await this.findOne({ alias });

    if (!found) {
      throw new NotFoundException(`Alias [${alias}] not found!`);
    }

    found.hitCount++;
    await this.save(found);
    return found;
  };

  getAllLinks = async (linkDto: LinkDto) => {
    return await this.find(linkDto);
  };

  deleteLink = async (id: number, secretCode: number, linkDto: LinkDto) => {
    const foundCode: Link = await this.findOne({ secretCode });
    const foundId: Link = await this.findOne({ id });
    const foundBoth: DeleteResult = await this.delete({
      ...linkDto,
      id,
      secretCode,
    });

    if (!foundId) {
      throw new NotFoundException(`Link with id [${id}] not found!`);
    }

    if (foundId && !foundCode) {
      throw new ForbiddenException(
        `Found link with id [${id}] but secret code [${secretCode}] doesn't match!`,
      );
    }
    return foundBoth;
  };
}
