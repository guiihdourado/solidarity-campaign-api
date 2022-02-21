import FakeProductsRepository from '@modules/products/repositories/fakes/FakeProductsRepository';
import FakeCampaignsRepository from '../repositories/fakes/FakeCampaignsRepository';
import FakeCampaignsProductsRepository from '../repositories/fakes/FakeCampaignsProductsRepository';
import CreateCampaignService from './CreateCampaignService';

let fakeProductsRepository: FakeProductsRepository;
let fakeCampaignsRepository: FakeCampaignsRepository;
let fakeCampaignsProductsRepository: FakeCampaignsProductsRepository;
let createCampaign: CreateCampaignService;

const spyCampaignsProductsRepositoryCreate = jest.spyOn(
  FakeCampaignsProductsRepository.prototype,
  'create'
);

const spyFindById = jest.spyOn(FakeProductsRepository.prototype, 'findById');

describe('CreateCampaign', () => {
  beforeEach(() => {
    fakeCampaignsRepository = new FakeCampaignsRepository();
    fakeProductsRepository = new FakeProductsRepository();
    fakeCampaignsProductsRepository = new FakeCampaignsProductsRepository();

    createCampaign = new CreateCampaignService(
      fakeCampaignsRepository,
      fakeProductsRepository,
      fakeCampaignsProductsRepository
    );
  });

  it('should be able to create a campaign', async () => {
    const product1 = await fakeProductsRepository.create({
      name: 'Arroz'
    });
    const product2 = await fakeProductsRepository.create({
      name: 'Feijão'
    });
    const product3 = await fakeProductsRepository.create({
      name: 'Macarrão'
    });

    const response = await createCampaign.execute({
      name: 'Campanha Teste',
      available_value: 3000,
      products: [
        {
          id: product1.id,
          quantity_we_have: 2
        },
        {
          id: product2.id,
          quantity_we_have: 3
        },
        {
          id: product3.id,
          quantity_we_have: 4
        }
      ]
    });

    expect(response).toHaveProperty('id');
    expect(response).toEqual({
      id: response.id,
      name: 'Campanha Teste',
      available_value: 3000
    });

    expect(spyFindById).toHaveBeenCalledTimes(3);
    expect(spyCampaignsProductsRepositoryCreate).toHaveBeenCalledTimes(3);
  });
});
