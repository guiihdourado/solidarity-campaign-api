import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import orderBy from 'lodash/orderBy';
import maxBy from 'lodash/maxBy';

import authMiddleware from '../middlewares/auth';

import CampaignsRepository from '../repositories/CampaignsRepository';
import BasicBasketsPricesRepository from '../repositories/BasicBasketsPricesRepository';

const basicBasketsPricesRouter = Router();

basicBasketsPricesRouter.use(authMiddleware);

basicBasketsPricesRouter.get('/', async (request, response) => {
  const { campaignId } = request.query;
  const user_role = request.user.role;

  let basicBasketsPrices;

  const basicBasketsPricesRepository = getCustomRepository(
    BasicBasketsPricesRepository
  );

  if (campaignId) {
    const campaignsRepository = getCustomRepository(CampaignsRepository);

    const campaign = await campaignsRepository.findOne({
      where: {
        id: campaignId
      }
    });

    basicBasketsPrices = await basicBasketsPricesRepository.find({
      where: {
        campaign_id: campaignId
      },
      relations: ['user']
    });

    const mapBasicBasketsPrices = basicBasketsPrices.map(basicBasketPrice => {
      const available_value = campaign?.available_value || 0;
      const can_buy = Math.floor(available_value / basicBasketPrice.price);
      const change = parseFloat(
        (available_value - can_buy * basicBasketPrice.price).toFixed(2)
      );

      return {
        ...basicBasketPrice,
        can_buy,
        change
      };
    });

    const bestOption = maxBy(mapBasicBasketsPrices, 'can_buy');

    const campaignMap = {
      ...campaign,
      best_option_id: bestOption?.id
    };

    const orderedBasicBasketsPrices =
      user_role === 'admin'
        ? orderBy(mapBasicBasketsPrices, ['can_buy'], 'desc')
        : mapBasicBasketsPrices;

    return response.json({
      campaign: campaignMap,
      basicBasketsPrices: orderedBasicBasketsPrices
    });
  }

  basicBasketsPrices = await basicBasketsPricesRepository.find();

  return response.json(basicBasketsPrices);
});

basicBasketsPricesRouter.post('/', async (request, response) => {
  const {
    price,
    place_name,
    place_localization,
    campaign_id,
    user_id
  } = request.body;

  const basicBasketsPricesRepository = getCustomRepository(
    BasicBasketsPricesRepository
  );

  const basicBasketPrice = basicBasketsPricesRepository.create({
    price,
    place_name,
    place_localization,
    campaign_id,
    user_id
  });

  await basicBasketsPricesRepository.save(basicBasketPrice);
  return response.json(basicBasketPrice);
});

export default basicBasketsPricesRouter;
