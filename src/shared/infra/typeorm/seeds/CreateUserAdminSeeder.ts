import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import User from '../../../../modules/users/infra/typeorm/entities/User';

export default class CreateUsers implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    const userRepository = connection.getRepository(User);

    const user = userRepository.create({
      name: 'Administrator',
      email: 'admin@admin.com',
      role: 'admin'
    });
    await userRepository.save(user);
  }
}
