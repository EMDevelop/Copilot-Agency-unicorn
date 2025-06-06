import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  source: string; // e.g. 'google', 'yelp', etc.

  @Column()
  author: string;

  @Column('text')
  content: string;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @Column()
  sentiment: string;

  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
