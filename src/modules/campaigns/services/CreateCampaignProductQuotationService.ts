import { injectable, inject } from 'tsyringe';

import ICampaignsProductsQuotationsRepository from '@modules/campaigns/repositories/ICampaignsProductsQuotationsRepository';
import ICreateCampaignProductQuotationDTO from '../dtos/ICreateCampaignProductQuotationDTO';

@injectable()
class CreateCampaignProductQuotationService {
  constructor(
    @inject('CampaignsProductsQuotationsRepository')
    private campaignsProductsQuotationsRepository: ICampaignsProductsQuotationsRepository
  ) {}

  public async execute({
    user_id,
    campaign_id,
    products
  }: ICreateCampaignProductQuotationDTO): Promise<void> {
    const productsMap = products.map(product => ({
      ...product,
      user_id,
      campaign_id
    }));

    await this.campaignsProductsQuotationsRepository.create({
      quoted_products: productsMap
    });
  }
}

export default CreateCampaignProductQuotationService;
