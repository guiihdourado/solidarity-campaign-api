import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCampaigns1607291199562
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'campaigns',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'begin_date',
            type: 'date'
          },
          {
            name: 'end_date',
            type: 'date'
          },
          {
            name: 'is_open',
            type: 'boolean',
            default: 'false'
          },
          {
            name: 'available_value',
            type: 'float'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('campaigns');
  }
}
