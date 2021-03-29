import { getRepository, Repository } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';

import Product from '../entities/Product';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';
import IUpdateProductDTO from '../../../dtos/IUpdateProductDTO';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOneOrFail(id);

    return product;
  }

  public async create(data: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(data);

    await this.ormRepository.save(product);

    return product;
  }

  public async findAll(): Promise<Product[]> {
    const products = await this.ormRepository.find();

    return products;
  }

  public async update({ id, data }: IUpdateProductDTO): Promise<Product> {
    const product = await this.ormRepository.findOneOrFail(id);

    const productUpdated = await this.ormRepository.save({
      ...product,
      ...data
    });

    return productUpdated;
  }

  public async deleteById(id: string): Promise<void> {
    const product = await this.ormRepository.findOneOrFail(id);

    if (product) {
      await this.ormRepository.delete(id);
    }
  }
}

export default ProductsRepository;
