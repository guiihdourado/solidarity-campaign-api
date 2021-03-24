import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    authenticateUser = new AuthenticateUserService(fakeUsersRepository);
  });

  it('should be able to authenticate with admin', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'admin'
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com'
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
    expect(response.user.role).toBe('admin');
    expect(response.user.role).not.toBe('user');
  });

  it('should be able to authenticate with user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'user'
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com'
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
    expect(response.user.role).toBe('user');
    expect(response.user.role).not.toBe('admin');
  });

  it('should not be able to authenticate with a non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'johndoe@example.com'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
