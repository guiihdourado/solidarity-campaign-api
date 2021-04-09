import FakeLocationsRepository from '../repositories/fakes/FakeLocationsRepository';
import UpdateLocationService from './UpdateLocationService';

let fakeLocationsRepository: FakeLocationsRepository;
let updateLocation: UpdateLocationService;

describe('UpdateLocation', () => {
  beforeEach(() => {
    fakeLocationsRepository = new FakeLocationsRepository();
    updateLocation = new UpdateLocationService(fakeLocationsRepository);
  });

  it('should be able to update a location', async () => {
    const location = await fakeLocationsRepository.create({
      place_name: 'Atacadão Dia a Dia',
      place_localization: 'BR 070, direção Águas Lindas'
    });

    const response = await updateLocation.execute({
      id: location.id,
      data: {
        place_name: 'Supermercado Superbom',
        place_localization: 'QNJ 9, direção samambaia'
      }
    });

    expect(response).toEqual({
      id: location.id,
      place_name: 'Supermercado Superbom',
      place_localization: 'QNJ 9, direção samambaia'
    });
  });
});
