import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Location from '../infra/typeorm/entities/Location';
import ILocationsRepository from '../repositories/ILocationsRepository';

interface IRequest {
  id: string;
}

@injectable()
class ShowLocationService {
  constructor(
    @inject('LocationsRepository')
    private locationsRepository: ILocationsRepository
  ) {}

  public async execute({ id }: IRequest): Promise<Location> {
    const location = await this.locationsRepository.findById(id);

    if (!location) {
      throw new AppError('Local não encontrado.');
    }

    return location;
  }
}

export default ShowLocationService;
