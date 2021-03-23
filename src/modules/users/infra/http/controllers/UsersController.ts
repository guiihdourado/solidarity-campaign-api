import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListUserService from '@modules/users/services/ListUserService';
import ListUsersService from '@modules/users/services/ListUsersService';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);

    const users = await listUsers.execute();

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id: userId } = request.params;

    const listUser = container.resolve(ListUserService);

    const user = await listUser.execute({ id: userId });

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, role } = request.body;

    const createUser = await container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      role
    });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { user_id: userId } = request.params;
    const { name, email, role } = request.body;

    const updateUser = await container.resolve(UpdateUserService);

    const user = await updateUser.execute({
      id: userId,
      dataToUpdate: {
        name,
        email,
        role
      }
    });

    return response.json(user);
  }
}
