import FakeCampaignsProductsQuotationsRepository from '../repositories/fakes/FakeCampaignsProductsQuotationsRepository';
import CreateCampaignProductQuotationService from './CreateCampaignProductQuotationService';

let fakeCampaignsProductsQuotationsRepository: FakeCampaignsProductsQuotationsRepository;
let createCampaignProductQuotation: CreateCampaignProductQuotationService;

const spy = jest.spyOn(
  CreateCampaignProductQuotationService.prototype,
  'execute'
);

describe('createCampaignProductQuotation', () => {
  beforeEach(() => {
    fakeCampaignsProductsQuotationsRepository = new FakeCampaignsProductsQuotationsRepository();
    createCampaignProductQuotation = new CreateCampaignProductQuotationService(
      fakeCampaignsProductsQuotationsRepository
    );
  });

  it('should be able to create a quotation to campaign product', async () => {
    await createCampaignProductQuotation.execute({
      user_id: '1',
      products: [
        {
          campaign_product_id: '1',
          quoted_price: 12
        },
        {
          campaign_product_id: '2',
          quoted_price: 13
        }
      ]
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
