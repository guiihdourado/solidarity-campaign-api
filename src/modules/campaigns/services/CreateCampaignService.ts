import { injectable, inject } from 'tsyringe';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import IProductsCampaignsRepository from '@modules/products/repositories/IProductsCampaignsRepository';

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
    @inject('ProductsCampaignsRepository')
    private productsCampaignsRepository: IProductsCampaignsRepository
  ) {}

  public async execute({
    products,
    ...restCampaign
  }: ICreateCampaignDTO): Promise<Campaign> {
    const campaign = await this.campaignsRepository.create({
      ...restCampaign
    });

    const promises = products.map(async product => {
      const findProductCampaign = await this.productsCampaignsRepository.findByCampaignIdAndProductId(
        {
          product_id: product.id,
          campaign_id: campaign.id
        }
      );

      if (findProductCampaign) {
        return;
      }

      const findProduct = await this.productsRepository.findById(product.id);

      if (findProduct) {
        await this.productsCampaignsRepository.create({
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
