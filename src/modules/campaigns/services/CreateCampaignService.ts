import { injectable, inject } from 'tsyringe';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

import ProductCampaign from '@modules/products/infra/typeorm/entities/ProductCampaign';
import ICreateCampaignDTO from '../dtos/ICreateCampaignDTO';
import Campaign from '../infra/typeorm/entities/Campaign';
import ICampaignsRepository from '../repositories/ICampaignsRepository';

@injectable()
class CreateCampaignService {
  constructor(
    @inject('CampaignsRepository')
    private campaignsRepository: ICampaignsRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    products,
    ...restCampaign
  }: ICreateCampaignDTO): Promise<Campaign> {
    const promises = products.map(async product => {
      const productCampaign = new ProductCampaign();

      productCampaign.product_id = product.id;
      productCampaign.quantity_we_have = product.quantity_we_have;
    });

    const productsMap = await Promise.all(promises);

    const campaign = await this.campaignsRepository.create({
      ...restCampaign,
      productsCampaigns: productsMap
    });

    return campaign;
  }
}

export default CreateCampaignService;
