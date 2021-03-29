import { injectable, inject } from 'tsyringe';

import IProductsRepository from '../repositories/IProductsRepository';

interface IResponse {
  message: string;
}

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  public async execute(id: string): Promise<IResponse> {
    await this.productsRepository.deleteById(id);

    return {
      message: 'Produto deletado com sucesso!'
    };
  }
}

export default DeleteProductService;
