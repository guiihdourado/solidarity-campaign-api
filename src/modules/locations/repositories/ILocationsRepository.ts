import Location from '../infra/typeorm/entities/Location';

import ICreateLocationDTO from '../dtos/ICreateLocationDTO';
import IUpdateLocationDTO from '../dtos/IUpdateLocationDTO';

export default interface ILocationsRepository {
  findById(id: string): Promise<Location | undefined>;
  create(data: ICreateLocationDTO): Promise<Location>;
  findAll(): Promise<Location[]>;
  update(data: IUpdateLocationDTO): Promise<Location>;
  deleteById(id: string): Promise<void>;
}
