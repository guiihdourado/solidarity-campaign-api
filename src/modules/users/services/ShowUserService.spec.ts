import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowUserService from './ShowUserService';

let fakeUsersRepository: FakeUsersRepository;
let showUser: ShowUserService;

describe('ShowUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showUser = new ShowUserService(fakeUsersRepository);
  });

  it('should be able to list an user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'user'
    });

    const response = await showUser.execute({ id: user.id });

    expect(response).toEqual(user);
  });

  it('should not be able to show the user from a non-existing user', async () => {
    await expect(
      showUser.execute({
        id: 'non-existing-user-id'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
