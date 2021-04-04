import { getRepository, Repository } from 'typeorm';

import ICampaignsRepository from '@modules/campaigns/repositories/ICampaignsRepository';
import ICreateCampaignDTO from '@modules/campaigns/dtos/ICreateCampaignDTO';
import Campaign from '../entities/Campaign';

class CampaignsRepository implements ICampaignsRepository {
  private ormRepository: Repository<Campaign>;

  constructor() {
    this.ormRepository = getRepository(Campaign);
  }

  public async create(data: ICreateCampaignDTO): Promise<Campaign> {
    const campaign = this.ormRepository.create(data);

    await this.ormRepository.save(campaign);

    return campaign;
  }
}

export default CampaignsRepository;
