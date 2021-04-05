import { injectable, inject } from 'tsyringe';

import Campaign from '../infra/typeorm/entities/Campaign';
import ICampaignsRepository from '../repositories/ICampaignsRepository';

@injectable()
class ListCampaignService {
  constructor(
    @inject('CampaignsRepository')
    private campaignsRepository: ICampaignsRepository
  ) {}

  public async execute(): Promise<Campaign[]> {
    const campaigns = await this.campaignsRepository.findAll();

    return campaigns;
  }
}

export default ListCampaignService;
