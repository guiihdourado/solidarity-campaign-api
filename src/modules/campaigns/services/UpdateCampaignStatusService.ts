import { injectable, inject } from 'tsyringe';
import IUpdateCampaignStatusDTO from '../dtos/IUpdateCampaignStatusDTO';

import Campaign from '../infra/typeorm/entities/Campaign';
import ICampaignsRepository from '../repositories/ICampaignsRepository';

@injectable()
class UpdateCampaignStatusService {
  constructor(
    @inject('CampaignsRepository')
    private campaignsRepository: ICampaignsRepository
  ) {}

  public async execute(data: IUpdateCampaignStatusDTO): Promise<Campaign> {
    const campaignUpdated = await this.campaignsRepository.updateOnlyStatus(
      data
    );

    return campaignUpdated;
  }
}

export default UpdateCampaignStatusService;
