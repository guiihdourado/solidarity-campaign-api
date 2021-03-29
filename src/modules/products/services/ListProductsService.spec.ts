import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import ListProductsService from './ListProductsService';

let fakeProductsRepository: FakeProductsRepository;
let listProducts: ListProductsService;

describe('ListProducts', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    listProducts = new ListProductsService(fakeProductsRepository);
  });

  it('should be able to list a products', async () => {
    const product1 = await fakeProductsRepository.create({
      name: 'Arroz'
    });

    const product2 = await fakeProductsRepository.create({
      name: 'Feijão'
    });

    const products = await listProducts.execute();

    expect(products).toEqual([product1, product2]);
  });
});
