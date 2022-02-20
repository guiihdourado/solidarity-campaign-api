import { Router } from 'express';
import authMiddleware from '@modules/users/infra/http/middlewares/auth';

import CampaignsController from '../controllers/CampaignsController';
import CampaignsStatusController from '../controllers/CampaignsStatusController';
import CampaignsProductsQuotationsController from '../controllers/CampaignsProductsQuotationsController';

const campaignsRouter = Router();
const campaignsController = new CampaignsController();
const campaignsStatusController = new CampaignsStatusController();
const campaignsProductsQuotationsController = new CampaignsProductsQuotationsController();

campaignsRouter.use(authMiddleware);

campaignsRouter.get('/', campaignsController.index);
campaignsRouter.get('/:id', campaignsController.show);
campaignsRouter.post('/', campaignsController.create);
campaignsRouter.patch(
  '/:campaign_id/update-status',
  campaignsStatusController.update
);

campaignsRouter.post(
  '/:campaign_location_id/quotations',
  campaignsProductsQuotationsController.create
);

export default campaignsRouter;
