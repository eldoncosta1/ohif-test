import { IllnessDTO } from 'schemas';

export interface IIllnessRepository {
  create(illnessType: IllnessDTO): Promise<void>;
}
