import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserService from './UpdateUserService';

let fakeUsersRepository: FakeUsersRepository;
let updateUser: UpdateUserService;

describe('UpdateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    updateUser = new UpdateUserService(fakeUsersRepository);
  });

  it('should be able to update a user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'user'
    });

    const response = await updateUser.execute({
      id: user.id,
      dataToUpdate: {
        name: 'John Doe 2',
        email: 'johndoe2@example.com',
        role: 'admin'
      }
    });

    expect(response).toEqual({
      id: user.id,
      name: 'John Doe 2',
      email: 'johndoe2@example.com',
      role: 'admin'
    });
  });
});
