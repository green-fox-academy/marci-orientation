import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class rPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
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
