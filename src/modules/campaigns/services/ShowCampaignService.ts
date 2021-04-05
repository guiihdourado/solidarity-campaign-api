import { injectable, inject } from 'tsyringe';

import Campaign from '../infra/typeorm/entities/Campaign';
import ICampaignsRepository from '../repositories/ICampaignsRepository';

@injectable()
class ShowCampaignService {
  constructor(
    @inject('CampaignsRepository')
    private campaignsRepository: ICampaignsRepository
  ) {}

  public async execute(id: string): Promise<Campaign | undefined> {
    const campaign = await this.campaignsRepository.findById(id);

    return campaign;
  }
}

export default ShowCampaignService;
