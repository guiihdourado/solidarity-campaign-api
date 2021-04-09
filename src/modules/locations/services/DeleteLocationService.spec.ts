import FakeLocationsRepository from '../repositories/fakes/FakeLocationsRepository';
import DeleteLocationService from './DeleteLocationService';

let fakeLocationsRepository: FakeLocationsRepository;
let deleteLocation: DeleteLocationService;

describe('DeleteLocation', () => {
  beforeEach(() => {
    fakeLocationsRepository = new FakeLocationsRepository();
    deleteLocation = new DeleteLocationService(fakeLocationsRepository);
  });

  it('should be able to delete a location', async () => {
    const location = await fakeLocationsRepository.create({
      place_name: 'Atacadão Dia a Dia',
      place_localization: 'BR 070, direção Águas Lindas'
    });

    const response = await deleteLocation.execute(location.id);

    expect(response).toEqual({
      message: 'Local deletado com sucesso!'
    });
  });
});
