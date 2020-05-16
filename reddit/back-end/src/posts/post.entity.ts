import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { IsUrl, MaxLength, MinLength } from 'class-validator';

@Entity()
export class rPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @MinLength(1)
  title: string;
  @Column()
  @MinLength(1)
  url: string;
  @Column()
  timestamp: number;
  @Column()
  score: number;
  @Column()
  owner: string;
  @Column()
  vote: number;
}
