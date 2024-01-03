import { IllnessDTO } from '../../schemas';

export const IIllnessRepository = 'IIllnessRepository';
export interface IIllnessRepository {
  save(illnessType: IllnessDTO): Promise<void>;
}
