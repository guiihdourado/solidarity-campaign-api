import FakeLocationsRepository from '../repositories/fakes/FakeLocationsRepository';
import ListLocationsService from './ListLocationsService';

let fakeLocationsRepository: FakeLocationsRepository;
let listLocations: ListLocationsService;

describe('ListLocations', () => {
  beforeEach(() => {
    fakeLocationsRepository = new FakeLocationsRepository();
    listLocations = new ListLocationsService(fakeLocationsRepository);
  });

  it('should be able to list a locations', async () => {
    const location1 = await fakeLocationsRepository.create({
      place_name: 'Atacadão Dia a Dia',
      place_localization: 'BR 070, direção Águas Lindas'
    });

    const location2 = await fakeLocationsRepository.create({
      place_name: 'Supermercado Superbom',
      place_localization: 'QNJ 9, direção samambaia'
    });

    const locations = await listLocations.execute();

    expect(locations).toEqual([location1, location2]);
  });
});
