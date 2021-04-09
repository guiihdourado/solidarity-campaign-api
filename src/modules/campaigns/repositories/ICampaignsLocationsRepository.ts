import ICreateCampaignLocationsRepositoryDTO from '../dtos/ICreateCampaignLocationsRepositoryDTO';

export default interface ICampaignsLocationsRepository {
  create(data: ICreateCampaignLocationsRepositoryDTO): Promise<void>;
}
