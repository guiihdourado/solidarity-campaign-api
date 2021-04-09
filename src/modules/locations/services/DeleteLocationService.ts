import { injectable, inject } from 'tsyringe';

import ILocationsRepository from '../repositories/ILocationsRepository';

interface IResponse {
  message: string;
}

@injectable()
class DeleteLocationService {
  constructor(
    @inject('LocationsRepository')
    private locationsRepository: ILocationsRepository
  ) {}

  public async execute(id: string): Promise<IResponse> {
    await this.locationsRepository.deleteById(id);

    return {
      message: 'Local deletado com sucesso!'
    };
  }
}

export default DeleteLocationService;
