import { injectable, inject } from 'tsyringe';
import IUpdateLocationDTO from '../dtos/IUpdateLocationDTO';

import Location from '../infra/typeorm/entities/Location';
import ILocationsRepository from '../repositories/ILocationsRepository';

@injectable()
class UpdateLocationService {
  constructor(
    @inject('LocationsRepository')
    private locationsRepository: ILocationsRepository
  ) {}

  public async execute({ id, data }: IUpdateLocationDTO): Promise<Location> {
    const location = await this.locationsRepository.update({
      id,
      data
    });

    return location;
  }
}

export default UpdateLocationService;
