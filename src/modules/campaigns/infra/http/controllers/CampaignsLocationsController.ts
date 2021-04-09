import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCampaignLocationsService from '@modules/campaigns/services/CreateCampaignLocationsService';

export default class CampaignsLocationsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { campaign_id } = request.params;
    const { locations } = request.body;

    const createCampaignLocations = await container.resolve(
      CreateCampaignLocationsService
    );

    await createCampaignLocations.execute({
      campaign_id,
      locations
    });

    return response.json({
      message: 'OK',
      error: false
    });
  }
}
