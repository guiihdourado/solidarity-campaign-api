import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateCampaignsProductsQuotations1617752370718
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'campaigns_products_quotations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'campaign_product_id',
            type: 'uuid'
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          {
            name: 'campaign_location_id',
            type: 'uuid'
          },
          {
            name: 'quoted_price',
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

    await queryRunner.createForeignKey(
      'campaigns_products_quotations',
      new TableForeignKey({
        name: 'CampaignsProductsQuotationsCampaignProduct',
        columnNames: ['campaign_product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'campaigns_products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'campaigns_products_quotations',
      new TableForeignKey({
        name: 'CampaignsProductsQuotationsUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'campaigns_products_quotations',
      new TableForeignKey({
        name: 'CampaignsProductsQuotationsCampaignLocation',
        columnNames: ['campaign_location_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'campaigns_locations',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('campaigns_products_quotations');
  }
}
