import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import DeleteProductService from './DeleteProductService';

let fakeProductsRepository: FakeProductsRepository;
let deleteProduct: DeleteProductService;

describe('DeleteProduct', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    deleteProduct = new DeleteProductService(fakeProductsRepository);
  });

  it('should be able to delete a user', async () => {
    const user = await fakeProductsRepository.create({
      name: 'Arroz'
    });

    const response = await deleteProduct.execute(user.id);

    expect(response).toEqual({
      message: 'Produto deletado com sucesso!'
    });
  });
});
