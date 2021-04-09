import { Router } from 'express';
import authMiddleware from '@modules/users/infra/http/middlewares/auth';

import CampaignsController from '../controllers/CampaignsController';
import CampaignsStatusController from '../controllers/CampaignsStatusController';
import CampaignsProductsQuotationsController from '../controllers/CampaignsProductsQuotationsController';
import CampaignsLocationsController from '../controllers/CampaignsLocationsController';

const campaignsRouter = Router();
const campaignsController = new CampaignsController();
const campaignsStatusController = new CampaignsStatusController();
const campaignsProductsQuotationsController = new CampaignsProductsQuotationsController();
const campaignsLocationsController = new CampaignsLocationsController();

campaignsRouter.use(authMiddleware);

campaignsRouter.get('/', campaignsController.index);
campaignsRouter.get('/:id', campaignsController.show);
campaignsRouter.post('/', campaignsController.create);
campaignsRouter.patch(
  '/:campaign_id/update-status',
  campaignsStatusController.update
);

campaignsRouter.post(
  '/:campaign_id/quotations',
  campaignsProductsQuotationsController.create
);

campaignsRouter.post(
  '/:campaign_id/locations',
  campaignsLocationsController.create
);

export default campaignsRouter;
