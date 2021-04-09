import ICreateCampaignProductDTO from '@modules/campaigns/dtos/ICreateCampaignProductDTO';
import IFindByCampaignIdAndProductId from '@modules/campaigns/dtos/IFindByCampaignIdAndProductIdDTO';
import CampaignProduct from '../infra/typeorm/entities/CampaignProduct';

export default interface ICampaignsProductsRepository {
  create(data: ICreateCampaignProductDTO): Promise<void>;
  findByCampaignIdAndProductId({
    campaign_id,
    product_id
  }: IFindByCampaignIdAndProductId): Promise<CampaignProduct | undefined>;
}
