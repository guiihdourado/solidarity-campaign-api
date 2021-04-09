import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import CampaignProduct from '../../../../campaigns/infra/typeorm/entities/CampaignProduct';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => CampaignProduct, campaignProduct => campaignProduct.product)
  campaignsProducts: CampaignProduct[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
