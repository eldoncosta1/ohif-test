import { IIllnessRepository } from 'repositories/interfaces/IIllnessRepository';
import { IllnessDTO } from 'schemas';

export class IllnessRepository implements IIllnessRepository {
  public async create(illnessType: IllnessDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
