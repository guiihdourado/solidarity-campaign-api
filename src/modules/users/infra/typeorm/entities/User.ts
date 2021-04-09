import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import CampaignProductQuotation from '../../../../campaigns/infra/typeorm/entities/CampaignProductQuotation';

export type UserRoleType = 'admin' | 'user';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ type: 'enum', enum: ['admin', 'user'] })
  role: UserRoleType;

  @OneToMany(
    () => CampaignProductQuotation,
    campaignProductQuotation => campaignProductQuotation.user
  )
  campaignsProductsQuotations: CampaignProductQuotation;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
