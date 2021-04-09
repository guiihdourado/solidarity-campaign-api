import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCampaignProductQuotationService from '@modules/campaigns/services/CreateCampaignProductQuotationService';

export default class CampaignsProductsQuotationsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { campaign_id } = request.params;
    const { products } = request.body;

    const createCampaignProductQuotation = await container.resolve(
      CreateCampaignProductQuotationService
    );

    await createCampaignProductQuotation.execute({
      user_id,
      campaign_id,
      products
    });

    return response.json({
      message: 'OK',
      error: false
    });
  }
}
