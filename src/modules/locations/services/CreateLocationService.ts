import { injectable, inject } from 'tsyringe';
import ICreateLocationDTO from '../dtos/ICreateLocationDTO';

import Location from '../infra/typeorm/entities/Location';
import ILocationsRepository from '../repositories/ILocationsRepository';

@injectable()
class CreateLocationService {
  constructor(
    @inject('LocationsRepository')
    private locationsRepository: ILocationsRepository
  ) {}

  public async execute({
    place_localization,
    place_name
  }: ICreateLocationDTO): Promise<Location> {
    const location = await this.locationsRepository.create({
      place_localization,
      place_name
    });

    return location;
  }
}

export default CreateLocationService;
