import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListLocationsService from '@modules/locations/services/ListLocationsService';
import ShowLocationService from '@modules/locations/services/ShowLocationService';
import CreateLocationService from '@modules/locations/services/CreateLocationService';
import UpdateLocationService from '@modules/locations/services/UpdateLocationService';
import DeleteLocationService from '@modules/locations/services/DeleteLocationService';

export default class LocationsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLocations = container.resolve(ListLocationsService);

    const locations = await listLocations.execute();

    return response.json(locations);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { location_id: locationId } = request.params;

    const showLocation = container.resolve(ShowLocationService);

    const location = await showLocation.execute({ id: locationId });

    return response.json(location);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { place_name, place_localization } = request.body;

    const createLocation = await container.resolve(CreateLocationService);

    const location = await createLocation.execute({
      place_name,
      place_localization
    });

    return response.json(location);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id: locationId } = request.params;
    const { place_name, place_localization } = request.body;

    const updateLocation = await container.resolve(UpdateLocationService);

    const location = await updateLocation.execute({
      id: locationId,
      data: {
        place_name,
        place_localization
      }
    });

    return response.json(location);
  }

  public async destroy(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id: locationId } = request.params;

    const deleteLocation = await container.resolve(DeleteLocationService);

    const responseDeleteLocation = await deleteLocation.execute(locationId);

    return response.json(responseDeleteLocation);
  }
}
