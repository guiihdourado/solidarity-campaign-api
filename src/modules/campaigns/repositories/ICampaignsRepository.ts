import Campaign from '../infra/typeorm/entities/Campaign';

import ICreateCampaignDTO from '../dtos/ICreateCampaignDTO';

export default interface ICampaignsRepository {
  findAll(): Promise<Campaign[]>;
  findById(id: string): Promise<Campaign | undefined>;
  create(data: Omit<ICreateCampaignDTO, 'products'>): Promise<Campaign>;
}
