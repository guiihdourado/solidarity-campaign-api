import { v4 as uuid } from 'uuid';

import ICampaignsRepository from '@modules/campaigns/repositories/ICampaignsRepository';
import ICreateCampaignDTO from '@modules/campaigns/dtos/ICreateCampaignDTO';
import IUpdateCampaignStatusDTO from '@modules/campaigns/dtos/IUpdateCampaignStatusDTO';

import Campaign from '../../infra/typeorm/entities/Campaign';

class FakeCampaignsRepository implements ICampaignsRepository {
  private campaigns: Campaign[] = [];

  public async create(campaignData: ICreateCampaignDTO): Promise<Campaign> {
    const campaign = new Campaign();

    Object.assign(campaign, { id: uuid() }, campaignData);

    this.campaigns.push(campaign);

    return campaign;
  }

  public async findAll(): Promise<Campaign[]> {
    return this.campaigns;
  }

  public async findById(id: string): Promise<Campaign | undefined> {
    const findCampaign = this.campaigns.find(campaign => campaign.id === id);

    return findCampaign;
  }

  public async updateOnlyStatus({
    campaign_id
  }: IUpdateCampaignStatusDTO): Promise<Campaign> {
    const findCampaignIndex = this.campaigns.findIndex(
      campaign => campaign.id === campaign_id
    );

    this.campaigns[findCampaignIndex] = {
      ...this.campaigns[findCampaignIndex],
      is_open: !this.campaigns[findCampaignIndex].is_open
    };

    return this.campaigns[findCampaignIndex];
  }
}

export default FakeCampaignsRepository;
