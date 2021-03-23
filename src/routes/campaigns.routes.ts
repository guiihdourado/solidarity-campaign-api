import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import authMiddleware from '../middlewares/auth';

import CampaignsRepository from '../repositories/CampaignsRepository';

const campaignsRouter = Router();

campaignsRouter.use(authMiddleware);

campaignsRouter.get('/', async (request, response) => {
  const campaignsRepository = getCustomRepository(CampaignsRepository);

  const campaigns = await campaignsRepository.find({
    order: {
      is_open: 'DESC'
    }
  });

  return response.json(campaigns);
});

campaignsRouter.get('/:campaign_id', async (request, response) => {
  const { campaign_id } = request.params;
  const campaignsRepository = getCustomRepository(CampaignsRepository);

  const campaign = await campaignsRepository.findOne(campaign_id);

  return response.json(campaign);
});

campaignsRouter.post('/', async (request, response) => {
  const { name, begin_date, end_date, available_value } = request.body;

  const campaignsRepository = getCustomRepository(CampaignsRepository);

  const campaign = campaignsRepository.create({
    name,
    begin_date,
    end_date,
    available_value
  });

  await campaignsRepository.save(campaign);

  return response.json(campaign);
});

campaignsRouter.put('/:campaign_id', async (request, response) => {
  const { campaign_id: campaignId } = request.params;
  const data = request.body;

  const campaignsRepository = getCustomRepository(CampaignsRepository);

  const campaign = await campaignsRepository.findOne(campaignId);

  if (!campaign) {
    throw new Error('Campaign not found');
  }

  const campaignUpdated = await campaignsRepository.save({
    ...campaign,
    ...data
  });

  return response.json(campaignUpdated);
});

campaignsRouter.delete('/:campaign_id', async (request, response) => {
  const { campaign_id: campaignId } = request.params;

  const campaignsRepository = getCustomRepository(CampaignsRepository);

  const campaign = await campaignsRepository.findOne(campaignId);

  if (!campaign) {
    throw new Error('Campaign not found');
  }

  await campaignsRepository.delete(campaignId);

  return response.json({
    message: 'Campanha deletada com sucesso!',
    deletedId: campaignId
  });
});

campaignsRouter.patch(
  '/:campaign_id/update-status',
  async (request, response) => {
    const { campaign_id: campaignId } = request.params;

    const campaignsRepository = getCustomRepository(CampaignsRepository);

    const campaign = await campaignsRepository.findOne({
      where: {
        id: campaignId
      }
    });

    if (campaign) {
      campaign.is_open = !campaign.is_open;
      await campaignsRepository.save(campaign);
    }

    return response.json(campaign);
  }
);

export default campaignsRouter;
