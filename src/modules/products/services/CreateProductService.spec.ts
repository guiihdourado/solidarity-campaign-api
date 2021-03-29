import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import CreateProductService from './CreateProductService';

let fakeProductsRepository: FakeProductsRepository;
let createProduct: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    createProduct = new CreateProductService(fakeProductsRepository);
  });

  it('should be able to create a new product', async () => {
    const response = await createProduct.execute({
      name: 'Arroz'
    });

    expect(response).toHaveProperty('id');
    expect(response).toEqual({
      id: response.id,
      name: 'Arroz'
    });
  });
});
