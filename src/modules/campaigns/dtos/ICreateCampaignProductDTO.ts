import Product from '@modules/products/infra/typeorm/entities/Product';
import Campaign from '../infra/typeorm/entities/Campaign';

export default interface ICreateCampaignProductDTO {
  quantity_we_have: number;
  product: Product;
  campaign: Campaign;
}
