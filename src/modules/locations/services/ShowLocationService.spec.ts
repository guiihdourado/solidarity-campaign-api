import AppError from '@shared/errors/AppError';

import FakeLocationsRepository from '../repositories/fakes/FakeLocationsRepository';
import ShowLocationService from './ShowLocationService';

let fakeLocationsRepository: FakeLocationsRepository;
let showLocation: ShowLocationService;

describe('ShowLocation', () => {
  beforeEach(() => {
    fakeLocationsRepository = new FakeLocationsRepository();
    showLocation = new ShowLocationService(fakeLocationsRepository);
  });

  it('should be able to list a location', async () => {
    const location = await fakeLocationsRepository.create({
      place_name: 'Atacadão Dia a Dia',
      place_localization: 'BR 070, direção Águas Lindas'
    });

    const response = await showLocation.execute({ id: location.id });

    expect(response).toEqual(location);
  });

  it('should not be able to show the location from a non-existing location', async () => {
    await expect(
      showLocation.execute({
        id: 'non-existing-location-id'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
