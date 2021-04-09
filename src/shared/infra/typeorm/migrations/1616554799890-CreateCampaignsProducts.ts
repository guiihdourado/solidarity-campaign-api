import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateCampaignsProducts1616554799890
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'campaigns_products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'product_id',
            type: 'uuid'
          },
          {
            name: 'campaign_id',
            type: 'uuid'
          },
          {
            name: 'quantity_we_have',
            type: 'integer',
            default: 0
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
      'campaigns_products',
      new TableForeignKey({
        name: 'CampaignsProductsProduct',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'campaigns_products',
      new TableForeignKey({
        name: 'CampaignsProductsCampaign',
        columnNames: ['campaign_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'campaigns',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('campaigns_products');
  }
}
