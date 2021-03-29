import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProductsService from '@modules/products/services/ListProductsService';
import ShowProductService from '@modules/products/services/ShowProductService';
import CreateProductService from '@modules/products/services/CreateProductService';
import UpdateProductService from '@modules/products/services/UpdateProductService';
import DeleteProductService from '@modules/products/services/DeleteProductService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = container.resolve(ListProductsService);

    const products = await listProducts.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { product_id: productId } = request.params;

    const showProduct = container.resolve(ShowProductService);

    const product = await showProduct.execute({ id: productId });

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createProduct = await container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id: productId } = request.params;
    const { name } = request.body;

    const updateProduct = await container.resolve(UpdateProductService);

    const product = await updateProduct.execute({
      id: productId,
      data: {
        name
      }
    });

    return response.json(product);
  }

  public async destroy(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id: productId } = request.params;

    const deleteProduct = await container.resolve(DeleteProductService);

    const responseDeleteProduct = await deleteProduct.execute(productId);

    return response.json(responseDeleteProduct);
  }
}
