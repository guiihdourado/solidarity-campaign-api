import Campaign from '../infra/typeorm/entities/Campaign';

import ICreateCampaignDTO from '../dtos/ICreateCampaignDTO';
import IUpdateCampaignStatusDTO from '../dtos/IUpdateCampaignStatusDTO';

export default interface ICampaignsRepository {
  findAll(): Promise<Campaign[]>;
  findById(id: string): Promise<Campaign | undefined>;
  create(data: Omit<ICreateCampaignDTO, 'products'>): Promise<Campaign>;
  updateOnlyStatus(data: IUpdateCampaignStatusDTO): Promise<Campaign>;
}
