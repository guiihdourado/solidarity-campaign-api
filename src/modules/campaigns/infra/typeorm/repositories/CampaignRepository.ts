import { getRepository, Repository } from 'typeorm';

import ICampaignsRepository from '@modules/users/repositories/ICampaignsRepository';
import Campaign from '../entities/Campaign';

class CampaignsRepository implements ICampaignsRepository {
  private ormRepository: Repository<Campaign>;

  constructor() {
    this.ormRepository = getRepository(Campaign);
  }
}

export default CampaignsRepository;
