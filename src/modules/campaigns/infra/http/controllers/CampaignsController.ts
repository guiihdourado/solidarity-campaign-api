import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCampaignsService from '@modules/campaigns/services/ListCampaignsService';
import ShowCampaignService from '@modules/campaigns/services/ShowCampaignService';
import CreateCampaignService from '@modules/campaigns/services/CreateCampaignService';

export default class CampaignsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCampaigns = await container.resolve(ListCampaignsService);

    const campaigns = await listCampaigns.execute();

    return response.json(campaigns);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCampaign = await container.resolve(ShowCampaignService);

    const campaign = await showCampaign.execute(id);

    return response.json(campaign);
  }

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
