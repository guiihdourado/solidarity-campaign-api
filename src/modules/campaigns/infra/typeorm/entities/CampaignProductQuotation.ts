import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne
} from 'typeorm';

import CampaignProduct from './CampaignProduct';
import User from '../../../../users/infra/typeorm/entities/User';

@Entity('campaigns_products_quotations')
class CampaignProductQuotation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  campaign_product_id: string;

  @Column()
  user_id: string;

  @Column()
  quoted_price: number;

  @OneToOne(
    () => CampaignProduct,
    campaignProduct => campaignProduct.campaignProductQuotation
  )
  @JoinColumn({ name: 'campaign_product_id' })
  campaignProduct: CampaignProduct;

  @ManyToOne(() => User, user => user.campaignsProductsQuotations)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default CampaignProductQuotation;
