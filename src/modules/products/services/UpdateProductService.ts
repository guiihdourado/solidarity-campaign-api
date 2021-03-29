import { injectable, inject } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  id: string;
  data: {
    name: string;
  };
}

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  public async execute({ id, data }: IRequest): Promise<Product> {
    const product = await this.productsRepository.update({
      id,
      data
    });

    return product;
  }
}

export default UpdateProductService;
