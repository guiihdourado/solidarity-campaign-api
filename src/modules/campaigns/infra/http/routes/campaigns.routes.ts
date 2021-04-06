import { Router } from 'express';

import CampaignsController from '../controllers/CampaignsController';
import CampaignsStatusController from '../controllers/CampaignsStatusController';

const campaignsRouter = Router();
const campaignsController = new CampaignsController();
const campaignsStatusController = new CampaignsStatusController();

campaignsRouter.get('/', campaignsController.index);
campaignsRouter.get('/:id', campaignsController.show);
campaignsRouter.post('/', campaignsController.create);
campaignsRouter.patch(
  '/:campaign_id/update-status',
  campaignsStatusController.update
);

export default campaignsRouter;
