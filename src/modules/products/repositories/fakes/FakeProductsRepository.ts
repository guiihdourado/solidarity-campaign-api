import { v4 as uuid } from 'uuid';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductDTO from '@modules/products/dtos/IUpdateProductDTO';

import Product from '../../infra/typeorm/entities/Product';

class FakeProductsRepository implements IProductsRepository {
  private products: Product[] = [];

  public async findById(id: string): Promise<Product | undefined> {
    const findProduct = this.products.find(product => product.id === id);

    return findProduct;
  }

  public async findAll(): Promise<Product[]> {
    return this.products;
  }

  public async create(productData: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, { id: uuid() }, productData);

    this.products.push(product);

    return product;
  }

  public async update({ id, data }: IUpdateProductDTO): Promise<Product> {
    const findIndex = this.products.findIndex(
      findProduct => findProduct.id === id
    );

    this.products[findIndex] = {
      ...this.products[findIndex],
      ...data
    };

    return this.products[findIndex];
  }

  public async deleteById(id: string): Promise<void> {
    const products = this.products.filter(product => product.id !== id);

    this.products = products;
  }
}

export default FakeProductsRepository;
