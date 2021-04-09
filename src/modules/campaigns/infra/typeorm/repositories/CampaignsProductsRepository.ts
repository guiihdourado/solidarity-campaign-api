import { getRepository, Repository } from 'typeorm';

import ICampaignsProductsRepository from '@modules/campaigns/repositories/ICampaignsProductsRepository';

import ICreateCampaignProductDTO from '@modules/campaigns/dtos/ICreateCampaignProductDTO';
import IFindByCampaignIdAndProductId from '@modules/campaigns/dtos/IFindByCampaignIdAndProductIdDTO';
import CampaignProduct from '../entities/CampaignProduct';

class CampaignsProductsRepository implements ICampaignsProductsRepository {
  private ormRepository: Repository<CampaignProduct>;

  constructor() {
    this.ormRepository = getRepository(CampaignProduct);
  }

  public async create(data: ICreateCampaignProductDTO): Promise<void> {
    const campaignProduct = this.ormRepository.create(data);

    await this.ormRepository.save(campaignProduct);
  }

  public async findByCampaignIdAndProductId({
    campaign_id,
    product_id
  }: IFindByCampaignIdAndProductId): Promise<CampaignProduct | undefined> {
    const campaignProduct = await this.ormRepository.findOne({
      where: {
        campaign_id,
        product_id
      }
    });

    return campaignProduct;
  }
}

export default CampaignsProductsRepository;
