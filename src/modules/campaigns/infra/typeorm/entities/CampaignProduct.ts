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

import Campaign from './Campaign';
import Product from '../../../../products/infra/typeorm/entities/Product';
import CampaignProductQuotation from './CampaignProductQuotation';

@Entity('campaigns_products')
class CampaignProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  campaign_id: string;

  @Column()
  product_id: string;

  @Column({ default: 0 })
  quantity_we_have: number;

  @ManyToOne(() => Product, product => product.campaignsProducts, {
    eager: true
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Campaign, campaign => campaign.campaignsProducts)
  @JoinColumn({ name: 'campaign_id' })
  campaign: Campaign;

  @OneToOne(
    () => CampaignProductQuotation,
    campaignProductQuotation => campaignProductQuotation.campaignProduct
  )
  campaignProductQuotation: CampaignProductQuotation;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default CampaignProduct;
