import { v4 as uuid } from 'uuid';

import ICampaignsRepository from '@modules/campaigns/repositories/ICampaignsRepository';
import ICreateCampaignDTO from '@modules/campaigns/dtos/ICreateCampaignDTO';

import Campaign from '../../infra/typeorm/entities/Campaign';

class FakeCampaignsRepository implements ICampaignsRepository {
  private campaigns: Campaign[] = [];

  public async create(campaignData: ICreateCampaignDTO): Promise<Campaign> {
    const campaign = new Campaign();

    Object.assign(campaign, { id: uuid() }, campaignData);

    this.campaigns.push(campaign);

    return campaign;
  }
}

export default FakeCampaignsRepository;
