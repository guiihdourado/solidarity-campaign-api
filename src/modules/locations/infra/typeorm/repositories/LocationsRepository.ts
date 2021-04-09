import { getRepository, Repository } from 'typeorm';

import ILocationsRepository from '@modules/locations/repositories/ILocationsRepository';

import Location from '../entities/Location';
import ICreateLocationDTO from '../../../dtos/ICreateLocationDTO';
import IUpdateLocationDTO from '../../../dtos/IUpdateLocationDTO';

class LocationsRepository implements ILocationsRepository {
  private ormRepository: Repository<Location>;

  constructor() {
    this.ormRepository = getRepository(Location);
  }

  public async findById(id: string): Promise<Location | undefined> {
    const location = await this.ormRepository.findOneOrFail(id);

    return location;
  }

  public async create(data: ICreateLocationDTO): Promise<Location> {
    const location = this.ormRepository.create(data);

    await this.ormRepository.save(location);

    return location;
  }

  public async findAll(): Promise<Location[]> {
    const locations = await this.ormRepository.find();

    return locations;
  }

  public async update({ id, data }: IUpdateLocationDTO): Promise<Location> {
    const location = await this.ormRepository.findOneOrFail(id);

    const locationUpdated = await this.ormRepository.save({
      ...location,
      ...data
    });

    return locationUpdated;
  }

  public async deleteById(id: string): Promise<void> {
    const location = await this.ormRepository.findOneOrFail(id);

    if (location) {
      await this.ormRepository.delete(id);
    }
  }
}

export default LocationsRepository;
