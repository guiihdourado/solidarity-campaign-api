import { injectable, inject } from 'tsyringe';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICampaignsProductsRepository from '@modules/campaigns/repositories/ICampaignsProductsRepository';

import ICreateCampaignDTO from '../dtos/ICreateCampaignDTO';
import Campaign from '../infra/typeorm/entities/Campaign';
import ICampaignsRepository from '../repositories/ICampaignsRepository';

@injectable()
class CreateCampaignService {
  constructor(
    @inject('CampaignsRepository')
    private campaignsRepository: ICampaignsRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    @inject('CampaignsProductsRepository')
    private campaignsProductsRepository: ICampaignsProductsRepository
  ) {}

  public async execute({
    products,
    ...restCampaign
  }: ICreateCampaignDTO): Promise<Campaign> {
    const campaign = await this.campaignsRepository.create({
      ...restCampaign
    });

    const promises = products.map(async product => {
      const findProduct = await this.productsRepository.findById(product.id);

      if (findProduct) {
        await this.campaignsProductsRepository.create({
          quantity_we_have: product.quantity_we_have,
          product: findProduct,
          campaign
        });
      }
    });

    await Promise.all(promises);

    return campaign;
  }
}

export default CreateCampaignService;
