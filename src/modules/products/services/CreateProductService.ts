import { injectable, inject } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  public async execute({ name }: IRequest): Promise<Product> {
    const product = await this.productsRepository.create({
      name
    });

    return product;
  }
}

export default CreateProductService;
