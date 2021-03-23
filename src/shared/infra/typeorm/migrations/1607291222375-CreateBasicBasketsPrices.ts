import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export default class CreateBasicBasketsPrices1607291222375
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'basic_baskets_prices',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'price',
            type: 'float'
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
      'basic_baskets_prices',
      new TableForeignKey({
        name: 'BasicBasketPriceCampaign',
        columnNames: ['campaign_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'campaigns',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'basic_baskets_prices',
      new TableForeignKey({
        name: 'BasicBasketPriceUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('basic_baskets_prices');
  }
}