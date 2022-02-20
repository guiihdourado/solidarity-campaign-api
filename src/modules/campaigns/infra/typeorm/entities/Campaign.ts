import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import CampaignProduct from './CampaignProduct';

@Entity('campaigns')
class Campaign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: false })
  is_open: boolean;

  @Column('decimal', { precision: 5, scale: 2 })
  available_value: number;

  @OneToMany(() => CampaignProduct, campaignProduct => campaignProduct.campaign)
  campaignsProducts: CampaignProduct[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Campaign;
