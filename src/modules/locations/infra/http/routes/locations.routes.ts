import { Router } from 'express';
import authMiddleware from '@modules/users/infra/http/middlewares/auth';

import LocationsController from '../controllers/LocationsController';

const locationsRouter = Router();
const locationsController = new LocationsController();

locationsRouter.use(authMiddleware);

locationsRouter.get('/', locationsController.index);
locationsRouter.get('/:id', locationsController.show);
locationsRouter.post('/', locationsController.create);
locationsRouter.put('/:id', locationsController.update);
locationsRouter.delete('/:id', locationsController.destroy);

export default locationsRouter;
