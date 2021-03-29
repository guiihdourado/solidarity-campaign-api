import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user with admin role', async () => {
    const response = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'admin'
    });

    expect(response).toHaveProperty('id');
    expect(response.role).toBe('admin');
    expect(response.role).not.toBe('user');
  });

  it('should be able to create a new user with user role', async () => {
    const response = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'user'
    });

    expect(response).toHaveProperty('id');
    expect(response.role).toBe('user');
    expect(response.role).not.toBe('admin');
  });

  it('should not be able to create a new user with email from another', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'admin'
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        role: 'admin'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
