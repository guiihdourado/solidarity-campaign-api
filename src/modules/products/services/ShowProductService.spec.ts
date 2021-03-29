import AppError from '@shared/errors/AppError';

import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import ShowProductService from './ShowProductService';

let fakeProductsRepository: FakeProductsRepository;
let showProduct: ShowProductService;

describe('ShowProduct', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    showProduct = new ShowProductService(fakeProductsRepository);
  });

  it('should be able to list a product', async () => {
    const product = await fakeProductsRepository.create({
      name: 'Arroz'
    });

    const response = await showProduct.execute({ id: product.id });

    expect(response).toEqual(product);
  });

  it('should not be able to show the product from a non-existing product', async () => {
    await expect(
      showProduct.execute({
        id: 'non-existing-product-id'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
