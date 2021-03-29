import { Router } from 'express';

import CampaignsController from '../controllers/CampaignsController';

const campaignsRouter = Router();
const campaignsController = new CampaignsController();

campaignsRouter.post('/', campaignsController.create);

export default campaignsRouter;
