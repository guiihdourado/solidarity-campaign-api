import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Product from './Product';
import Campaign from '../../../../campaigns/infra/typeorm/entities/Campaign';

@Entity('products_campaigns')
class ProductCampaign {
  constructor(quantity_we_have: number, product: Product, campaign: Campaign) {
    this.quantity_we_have = quantity_we_have;
    this.product = product;
    this.campaign = campaign;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  campaign_id: string;

  @Column()
  product_id: string;

  @Column({ default: 0 })
  quantity_we_have: number;

  @ManyToOne(() => Product, product => product.productsCampaigns, {
    eager: true
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Campaign, campaign => campaign.productsCampaigns)
  @JoinColumn({ name: 'campaign_id' })
  campaign: Campaign;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ProductCampaign;
