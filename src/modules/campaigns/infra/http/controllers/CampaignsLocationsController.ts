import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCampaignLocationService from '@modules/campaigns/services/CreateCampaignLocationService';

export default class CampaignsLocationsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { campaign_id } = request.params;
    const { user_id, locations } = request.body;

    const createCampaignLocations = await container.resolve(
      CreateCampaignLocationService
    );

    await createCampaignLocations.execute({
      user_id,
      campaign_id,
      locations
    });

    return response.json({
      message: 'OK',
      error: false
    });
  }
}
