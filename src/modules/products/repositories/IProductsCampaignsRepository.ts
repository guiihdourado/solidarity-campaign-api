import ICreateProductCampaignDTO from '@modules/campaigns/dtos/ICreateProductCampaignDTO';
import IFindByCampaignIdAndProductId from '@modules/campaigns/dtos/IFindByCampaignIdAndProductIdDTO';
import ProductCampaign from '../infra/typeorm/entities/ProductCampaign';

export default interface IProductsCampaignsRepository {
  create(data: ICreateProductCampaignDTO): Promise<void>;
  findByCampaignIdAndProductId({
    campaign_id,
    product_id
  }: IFindByCampaignIdAndProductId): Promise<ProductCampaign | undefined>;
}
