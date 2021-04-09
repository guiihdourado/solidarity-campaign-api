import ICreateCampaignProductQuotationRepositoryDTO from '../dtos/ICreateCampaignProductQuotationRepositoryDTO';

export default interface ICampaignsProductsQuotationsRepository {
  create(data: ICreateCampaignProductQuotationRepositoryDTO): Promise<void>;
}
