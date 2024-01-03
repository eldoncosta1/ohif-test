import { inject, injectable } from 'tsyringe';
import { SaveIllnessType } from '../models/usecases';
import { IIllnessRepository } from '../repositories/interfaces/IIllnessRepository';
import { IllnessDTO } from '../schemas';

@injectable()
export class DbSaveIllness implements SaveIllnessType {
  constructor(
    @inject(IIllnessRepository)
    private readonly illnessRepository: IIllnessRepository
  ) {}

  public async execute(input: IllnessDTO): Promise<void> {
    try {
      await this.illnessRepository.save(input);
    } catch (err) {
      console.error('erro ao savar', err);
      throw new Error('erro ao savar doença');
    }
  }
}
