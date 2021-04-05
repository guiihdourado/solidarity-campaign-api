import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import IProductsCampaignsRepository from '@modules/products/repositories/IProductsCampaignsRepository';
import ProductsCampaignsRepository from '@modules/products/infra/typeorm/repositories/ProductsCampaignsRepository';

import ICampaignsRepository from '@modules/campaigns/repositories/ICampaignsRepository';
import CampaignsRepository from '@modules/campaigns/infra/typeorm/repositories/CampaignsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
);

container.registerSingleton<IProductsCampaignsRepository>(
  'ProductsCampaignsRepository',
  ProductsCampaignsRepository
);

container.registerSingleton<ICampaignsRepository>(
  'CampaignsRepository',
  CampaignsRepository
);
