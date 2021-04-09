import { getRepository, Repository } from 'typeorm';

import ICampaignsProductsQuotationsRepository from '@modules/campaigns/repositories/ICampaignsProductsQuotationsRepository';

import ICreateCampaignProductQuotationRepositoryDTO from '@modules/campaigns/dtos/ICreateCampaignProductQuotationRepositoryDTO';
import CampaignProductQuotation from '../entities/CampaignProductQuotation';

class CampaignsProductsQuotationsRepository
  implements ICampaignsProductsQuotationsRepository {
  private ormRepository: Repository<CampaignProductQuotation>;

  constructor() {
    this.ormRepository = getRepository(CampaignProductQuotation);
  }

  public async create({
    quoted_products
  }: ICreateCampaignProductQuotationRepositoryDTO): Promise<void> {
    const campaignsProductsQuotations = this.ormRepository.create(
      quoted_products
    );

    await this.ormRepository.save(campaignsProductsQuotations);
  }
}

export default CampaignsProductsQuotationsRepository;
