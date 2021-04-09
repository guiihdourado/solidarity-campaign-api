import FakeLocationsRepository from '../repositories/fakes/FakeLocationsRepository';
import CreateLocationService from './CreateLocationService';

let fakeLocationsRepository: FakeLocationsRepository;
let createLocation: CreateLocationService;

describe('CreateLocation', () => {
  beforeEach(() => {
    fakeLocationsRepository = new FakeLocationsRepository();
    createLocation = new CreateLocationService(fakeLocationsRepository);
  });

  it('should be able to create a new location', async () => {
    const response = await createLocation.execute({
      place_name: 'Atacadão Dia a Dia',
      place_localization: 'BR 070, direção Águas Lindas'
    });

    expect(response).toHaveProperty('id');
    expect(response).toEqual({
      id: response.id,
      place_name: 'Atacadão Dia a Dia',
      place_localization: 'BR 070, direção Águas Lindas'
    });
  });
});
