import { injectable, inject } from 'tsyringe';

import ICampaignsLocationsRepository from '@modules/campaigns/repositories/ICampaignsLocationsRepository';
import ICreateCampaignLocationsDTO from '../dtos/ICreateCampaignLocationsDTO';

@injectable()
class CreateCampaignLocationsService {
  constructor(
    @inject('CampaignsLocationsRepository')
    private campaignsLocationsRepository: ICampaignsLocationsRepository
  ) {}

  public async execute({
    campaign_id,
    locations
  }: ICreateCampaignLocationsDTO): Promise<void> {
    const locationsMap = locations.map(location => ({
      ...location,
      campaign_id
    }));

    await this.campaignsLocationsRepository.create({
      locations: locationsMap
    });
  }
}

export default CreateCampaignLocationsService;
