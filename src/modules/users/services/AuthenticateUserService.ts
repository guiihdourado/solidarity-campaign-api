import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ email }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError(
        'Esse usuário não foi cadastrado. Verifique com o administrador.',
        401
      );
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        role: user.role
      },
      secret,
      {
        subject: user.id,
        expiresIn
      }
    );

    return {
      user,
      token
    };
  }
}

export default AuthenticateUserService;
