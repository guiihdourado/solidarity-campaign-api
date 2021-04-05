import { getRepository, Repository } from 'typeorm';

import IProductsCampaignsRepository from '@modules/products/repositories/IProductsCampaignsRepository';

import ICreateProductCampaignDTO from '@modules/campaigns/dtos/ICreateProductCampaignDTO';
import IFindByCampaignIdAndProductId from '@modules/campaigns/dtos/IFindByCampaignIdAndProductIdDTO';
import ProductCampaign from '../entities/ProductCampaign';

class ProductsCampaignsRepository implements IProductsCampaignsRepository {
  private ormRepository: Repository<ProductCampaign>;

  constructor() {
    this.ormRepository = getRepository(ProductCampaign);
  }

  public async create(data: ICreateProductCampaignDTO): Promise<void> {
    const productCampaign = this.ormRepository.create(data);

    await this.ormRepository.save(productCampaign);
  }

  public async findByCampaignIdAndProductId({
    campaign_id,
    product_id
  }: IFindByCampaignIdAndProductId): Promise<ProductCampaign | undefined> {
    const productCampaign = await this.ormRepository.findOne({
      where: {
        campaign_id,
        product_id
      }
    });

    return productCampaign;
  }
}

export default ProductsCampaignsRepository;
