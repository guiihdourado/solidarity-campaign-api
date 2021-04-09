import { getRepository, Repository } from 'typeorm';

import ICampaignsLocationsRepository from '@modules/campaigns/repositories/ICampaignsLocationsRepository';

import ICreateCampaignLocationsRepositoryDTO from '@modules/campaigns/dtos/ICreateCampaignLocationsRepositoryDTO';
import CampaignLocation from '../entities/CampaignLocation';

class CampaignsLocationsRepository implements ICampaignsLocationsRepository {
  private ormRepository: Repository<CampaignLocation>;

  constructor() {
    this.ormRepository = getRepository(CampaignLocation);
  }

  public async create({
    locations
  }: ICreateCampaignLocationsRepositoryDTO): Promise<void> {
    const campaignLocation = this.ormRepository.create(locations);

    await this.ormRepository.save(campaignLocation);
  }
}

export default CampaignsLocationsRepository;
