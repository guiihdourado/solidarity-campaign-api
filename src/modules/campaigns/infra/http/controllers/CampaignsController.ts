import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CampaignsController {
  public async create(
    request: Request,
    response: Response
  ): Promise<Response> {}
}
