import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

import User from '../../../../modules/users/infra/typeorm/entities/User';

export class SeedAdminUser1616474929790 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    const userRepository = getRepository(User);

    const user = userRepository.create({
      name: 'Administrator',
      email: 'admin@admin.com',
      role: 'admin'
    });
    await userRepository.save(user);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
