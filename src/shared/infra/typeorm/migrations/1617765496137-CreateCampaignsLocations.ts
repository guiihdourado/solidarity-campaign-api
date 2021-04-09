import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateCampaignsLocations1617765496137
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'campaigns_locations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'location_id',
            type: 'uuid'
          },
          {
            name: 'campaign_id',
            type: 'uuid'
          },
          {
            name: 'user_id',
            type: 'uuid'
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
      'campaigns_locations',
      new TableForeignKey({
        name: 'CampaignsLocationsLocation',
        columnNames: ['location_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'locations',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'campaigns_locations',
      new TableForeignKey({
        name: 'CampaignsLocationsCampaign',
        columnNames: ['campaign_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'campaigns',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'campaigns_locations',
      new TableForeignKey({
        name: 'CampaignsLocationsUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('campaigns_locations');
  }
}
