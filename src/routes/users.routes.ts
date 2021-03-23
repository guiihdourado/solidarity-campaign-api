import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import authMiddleware from '../middlewares/auth';

import CreateUserService from '../services/CreateUserService';
import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();

usersRouter.use(authMiddleware);

usersRouter.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);

  const users = await usersRepository.find();

  return response.json(users);
});

usersRouter.get('/:user_id', async (request, response) => {
  const { user_id: userId } = request.params;

  const usersRepository = getCustomRepository(UsersRepository);

  const user = await usersRepository.findOne(userId);

  if (!user) {
    throw new Error('User not found');
  }

  return response.json(user);
});

usersRouter.post('/', async (request, response) => {
  const { name, email, role } = request.body;
  const createUser = new CreateUserService();
  const user = await createUser.execute({
    name,
    email,
    role
  });

  return response.json(user);
});

usersRouter.put('/:user_id', async (request, response) => {
  const { user_id: userId } = request.params;
  const data = request.body;

  const usersRepository = getCustomRepository(UsersRepository);

  const user = await usersRepository.findOne(userId);

  if (!user) {
    throw new Error('User not found');
  }

  const userUpdated = await usersRepository.save({
    ...user,
    ...data
  });

  return response.json(userUpdated);
});

export default usersRouter;
