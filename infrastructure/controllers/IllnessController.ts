import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import { DbSaveIllness } from '../usecases';

export default class IllnessController {
  public async create(
    request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { illnessType } = request.body;

      const handler = container.resolve(DbSaveIllness);

      await handler.execute(illnessType);

      return response.send('success');
    } catch (err) {
      _next(err);
    }
  }
}
