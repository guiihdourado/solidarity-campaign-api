import { Router } from 'express';
import authMiddleware from '@modules/users/infra/http/middlewares/auth';

import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.use(authMiddleware);

productsRouter.get('/', productsController.index);
productsRouter.post('/', productsController.create);
productsRouter.put('/:id', productsController.update);
productsRouter.delete('/:id', productsController.destroy);

export default productsRouter;
