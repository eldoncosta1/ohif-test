import { IllnessDTO } from '../../schemas';

export interface SaveIllnessType {
  execute: (input: IllnessDTO) => Promise<void>;
}
