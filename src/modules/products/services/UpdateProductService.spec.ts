import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import UpdateProductService from './UpdateProductService';

let fakeProductsRepository: FakeProductsRepository;
let updateProduct: UpdateProductService;

describe('UpdateProduct', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    updateProduct = new UpdateProductService(fakeProductsRepository);
  });

  it('should be able to update a product', async () => {
    const product = await fakeProductsRepository.create({
      name: 'Arroz'
    });

    const response = await updateProduct.execute({
      id: product.id,
      data: {
        name: 'Feijão'
      }
    });

    expect(response).toEqual({
      id: product.id,
      name: 'Feijão'
    });
  });
});
