import { v4 as uuid } from 'uuid';

import ILocationsRepository from '@modules/locations/repositories/ILocationsRepository';
import ICreateLocationDTO from '@modules/locations/dtos/ICreateLocationDTO';
import IUpdateLocationDTO from '@modules/locations/dtos/IUpdateLocationDTO';

import Location from '../../infra/typeorm/entities/Location';

class FakeLocationsRepository implements ILocationsRepository {
  private locations: Location[] = [];

  public async findById(id: string): Promise<Location | undefined> {
    const findLocation = this.locations.find(location => location.id === id);

    return findLocation;
  }

  public async findAll(): Promise<Location[]> {
    return this.locations;
  }

  public async create(locationData: ICreateLocationDTO): Promise<Location> {
    const location = new Location();

    Object.assign(location, { id: uuid() }, locationData);

    this.locations.push(location);

    return location;
  }

  public async update({ id, data }: IUpdateLocationDTO): Promise<Location> {
    const findIndex = this.locations.findIndex(
      findLocation => findLocation.id === id
    );

    this.locations[findIndex] = {
      ...this.locations[findIndex],
      ...data
    };

    return this.locations[findIndex];
  }

  public async deleteById(id: string): Promise<void> {
    const locations = this.locations.filter(location => location.id !== id);

    this.locations = locations;
  }
}

export default FakeLocationsRepository;
