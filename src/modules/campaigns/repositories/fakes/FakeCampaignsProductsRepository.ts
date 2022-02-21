import { v4 as uuid } from 'uuid';

import ICampaignsProductsRepository from '@modules/campaigns/repositories/ICampaignsProductsRepository';
import ICreateCampaignProductDTO from '@modules/campaigns/dtos/ICreateCampaignProductDTO';
import IFindByCampaignIdAndProductIdDTO from '@modules/campaigns/dtos/IFindByCampaignIdAndProductIdDTO';

import CampaignProduct from '../../infra/typeorm/entities/CampaignProduct';

class FakeCampaignsProductsRepository implements ICampaignsProductsRepository {
  private campaignProducts: CampaignProduct[] = [];

  public async create(data: ICreateCampaignProductDTO): Promise<void> {
    const campaignProduct = new CampaignProduct();

    Object.assign(campaignProduct, { id: uuid() }, data);

    this.campaignProducts.push(campaignProduct);
  }

  public async findByCampaignIdAndProductId({
    campaign_id,
    product_id
  }: IFindByCampaignIdAndProductIdDTO): Promise<CampaignProduct | undefined> {
    const campaignProduct = this.campaignProducts.find(
      product =>
        product.id === product_id && product.campaign_id === campaign_id
    );

    return campaignProduct;
  }
}

export default FakeCampaignsProductsRepository;
