import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class PlayList {
  constructor() {}
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ default: false })
  title: string;

  @Column({ default: false })
  artist?: string;

  @Column({ default: false })
  duration?: number;

  @Column({ default: false })
  path?: string;

  @Column({ default: false })
  system?: number;
}
