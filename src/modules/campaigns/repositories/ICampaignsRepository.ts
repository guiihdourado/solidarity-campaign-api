import Campaign from '../infra/typeorm/entities/Campaign';

import ICreateCampaignDTO from '../dtos/ICreateCampaignDTO';

export default interface ICampaignsRepository {
  create(data: ICreateCampaignDTO): Promise<Campaign>;
}
