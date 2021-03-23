import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import UsersRepository from '../repositories/UsersRepository';

import User from '../models/User';

interface Request {
  email: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email }: Request): Promise<IResponse> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError(
        'Esse usuário não foi cadastrado. Verifique com o administrador.',
        401
      );
    }

    const token = sign(
      {
        role: user.role
      },
      'happy-campaigns',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    );

    return {
      user,
      token
    };
  }
}

export default AuthenticateUserService;
