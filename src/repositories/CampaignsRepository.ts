import { EntityRepository, Repository } from 'typeorm';
import Campaign from '../models/Campaign';

@EntityRepository(Campaign)
class CampaignsRepository extends Repository<Campaign> {}

export default CampaignsRepository;
