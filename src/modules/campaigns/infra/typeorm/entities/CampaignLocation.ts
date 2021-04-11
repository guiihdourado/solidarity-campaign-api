import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne
} from 'typeorm';

import Campaign from './Campaign';
import User from '../../../../users/infra/typeorm/entities/User';
import Location from '../../../../locations/infra/typeorm/entities/Location';

@Entity('campaigns_locations')
class CampaignLocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  location_id: string;

  @Column()
  campaign_id: string;

  @Column()
  user_id: string;

  @OneToOne(() => Location)
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @OneToOne(() => Campaign)
  @JoinColumn({ name: 'campaign_id' })
  campaign: Campaign;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default CampaignLocation;