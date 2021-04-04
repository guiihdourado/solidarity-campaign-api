import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';

import Product from './Product';
import Campaign from '../../../../campaigns/infra/typeorm/entities/Campaign';

@Entity('products_campaigns')
class ProductCampaign {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public product_id!: string;

  @Column()
  public campaign_id!: string;

  @Column()
  public quantity_we_have!: number;

  @ManyToOne(() => Product, product => product.productsCampaigns)
  public product!: Product;

  @ManyToOne(() => Campaign, campaign => campaign.productsCampaigns)
  public campaign!: Campaign;

  @CreateDateColumn()
  public created_at!: Date;

  @UpdateDateColumn()
  public updated_at!: Date;
}

export default ProductCampaign;
