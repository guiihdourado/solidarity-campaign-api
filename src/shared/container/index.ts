import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import ICampaignsRepository from '@modules/campaigns/repositories/ICampaignsRepository';
import CampaignsRepository from '@modules/campaigns/infra/typeorm/repositories/CampaignsRepository';

import ICampaignsProductsRepository from '@modules/campaigns/repositories/ICampaignsProductsRepository';
import CampaignsProductsRepository from '@modules/campaigns/infra/typeorm/repositories/CampaignsProductsRepository';

import ICampaignsLocationsRepository from '@modules/campaigns/repositories/ICampaignsLocationsRepository';
import CampaignsLocationsRepository from '@modules/campaigns/infra/typeorm/repositories/CampaignsLocationsRepository';

import ICampaignsProductsQuotationsRepository from '@modules/campaigns/repositories/ICampaignsProductsQuotationsRepository';
import CampaignsProductsQuotationsRepository from '@modules/campaigns/infra/typeorm/repositories/CampaignsProductsQuotationsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
);

container.registerSingleton<ICampaignsRepository>(
  'CampaignsRepository',
  CampaignsRepository
);

container.registerSingleton<ICampaignsProductsRepository>(
  'CampaignsProductsRepository',
  CampaignsProductsRepository
);

container.registerSingleton<ICampaignsLocationsRepository>(
  'CampaignsLocationsRepository',
  CampaignsLocationsRepository
);

container.registerSingleton<ICampaignsProductsQuotationsRepository>(
  'CampaignsProductsQuotationsRepository',
  CampaignsProductsQuotationsRepository
);
