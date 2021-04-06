import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCampaignStatusService from '@modules/campaigns/services/UpdateCampaignStatusService';

export default class CampaignsStatusController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { campaign_id } = request.params;
    const { is_open } = request.body;

    const updateCampaignStatus = await container.resolve(
      UpdateCampaignStatusService
    );

    const campaign = await updateCampaignStatus.execute({
      is_open,
      campaign_id
    });

    return response.json(campaign);
  }
}
