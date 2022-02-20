import { v4 as uuid } from 'uuid';

import ICampaignsProductsQuotationsRepository from '@modules/campaigns/repositories/ICampaignsProductsQuotationsRepository';
import ICreateCampaignProductQuotationRepositoryDTO from '@modules/campaigns/dtos/ICreateCampaignProductQuotationRepositoryDTO';

import CampaignProductQuotation from '../../infra/typeorm/entities/CampaignProductQuotation';

class FakeCampaignsRepository
  implements ICampaignsProductsQuotationsRepository {
  private campaignsProductQuotation: CampaignProductQuotation[] = [];

  public async create(
    data: ICreateCampaignProductQuotationRepositoryDTO
  ): Promise<void> {
    const campaignProductQuotation = new CampaignProductQuotation();

    Object.assign(campaignProductQuotation, { id: uuid() }, data);

    this.campaignsProductQuotation.push(campaignProductQuotation);
  }
}

export default FakeCampaignsRepository;
