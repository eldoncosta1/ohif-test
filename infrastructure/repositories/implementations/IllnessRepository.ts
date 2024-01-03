import { prismaClient } from '../../database/prismaClient';
import { illnessId } from '../../database/seeds/illnessId';
import { IIllnessRepository } from '../../repositories/interfaces/IIllnessRepository';
import { IllnessDTO } from '../../schemas';

export class IllnessRepository implements IIllnessRepository {
  public async save(illnessType: IllnessDTO): Promise<void> {
    await prismaClient.illness.update({
      data: {
        illnessType,
      },
      where: {
        id: illnessId,
      },
    });
  }
}
