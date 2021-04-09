import { injectable, inject } from 'tsyringe';

import Location from '../infra/typeorm/entities/Location';
import ILocationsRepository from '../repositories/ILocationsRepository';

@injectable()
class ListLocationsService {
  constructor(
    @inject('LocationsRepository')
    private locationsRepository: ILocationsRepository
  ) {}

  public async execute(): Promise<Location[]> {
    const locations = await this.locationsRepository.findAll();

    return locations;
  }
}

export default ListLocationsService;
