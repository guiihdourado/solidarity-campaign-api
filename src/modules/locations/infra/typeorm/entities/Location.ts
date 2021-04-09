import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('locations')
class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  place_name: string;

  @Column()
  place_localization: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Location;
