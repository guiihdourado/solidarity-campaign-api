import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import User from './User';
import Campaign from './Campaign';

@Entity('basic_baskets_prices')
class BasicBasketPrice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  place_name: string;

  @Column()
  place_localization: string;

  @Column()
  campaign_id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => Campaign)
  @JoinColumn({ name: 'campaign_id' })
  campaign: Campaign;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: Campaign;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default BasicBasketPrice;
