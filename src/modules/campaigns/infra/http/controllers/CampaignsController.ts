import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCampaignService from '@modules/campaigns/services/CreateCampaignService';

export default class CampaignsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      begin_date,
      end_date,
      available_value,
      products
    } = request.body;

    const createCampaign = await container.resolve(CreateCampaignService);

    const campaign = await createCampaign.execute({
      name,
      begin_date,
      end_date,
      available_value,
      products
    });

    return response.json(campaign);
  }
}
