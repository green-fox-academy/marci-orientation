import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class PostEntity {
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
