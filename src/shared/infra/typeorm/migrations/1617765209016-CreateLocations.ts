import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateLocations1617765209016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'locations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          {
            name: 'campaign_id',
            type: 'uuid'
          },
          {
            name: 'place_name',
            type: 'varchar'
          },
          {
            name: 'place_localization',
            type: 'varchar'
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

    await queryRunner.createForeignKey(
      'locations',
      new TableForeignKey({
        name: 'LocationsUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'locations',
      new TableForeignKey({
        name: 'LocationsCampaign',
        columnNames: ['campaign_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'campaigns',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('locations');
  }
}
