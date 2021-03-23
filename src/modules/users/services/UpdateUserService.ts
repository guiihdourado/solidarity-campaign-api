import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
  dataToUpdate: {
    name: string;
    email: string;
    role: 'admin' | 'user';
  };
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ id, dataToUpdate }: IRequest): Promise<User> {
    const user = await this.usersRepository.update(id, dataToUpdate);

    return user;
  }
}

export default UpdateUserService;
