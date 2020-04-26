import { Column, PrimaryGeneratedColumn, Entity, BaseEntity } from 'typeorm';

@Entity()
export class PostEntity extends BaseEntity {
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
