import { Router } from 'express';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import locationsRouter from '@modules/locations/infra/http/routes/locations.routes';
import campaignsRouter from '@modules/campaigns/infra/http/routes/campaigns.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/products', productsRouter);
routes.use('/locations', locationsRouter);
routes.use('/campaigns', campaignsRouter);

export default routes;
