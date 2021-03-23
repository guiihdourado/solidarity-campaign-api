import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import campaignsRouter from './campaigns.routes';
import basicBasketsPricesRouter from './basicBasketsPricesRouter.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/campaigns', campaignsRouter);
routes.use('/basic-baskets-prices', basicBasketsPricesRouter);

export default routes;
