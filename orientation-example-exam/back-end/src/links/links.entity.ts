import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: true })
  url: string;
  @Column({ default: false, unique: true })
  alias: string;
  @Column({ default: false })
  hitCount: number;
  @Column({ select: false, default: false })
  secretCode: number;
}
