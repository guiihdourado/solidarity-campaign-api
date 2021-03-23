import { getRepository } from 'typeorm';
import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

class CreateUserService {
  public async execute({ name, email, role }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email }
    });

    if (checkUserExists) {
      throw new AppError('Esse e-mail já existe. Tente outro.');
    }

    const user = usersRepository.create({
      name,
      email,
      role
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
