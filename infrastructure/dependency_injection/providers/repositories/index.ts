import { container } from 'tsyringe';
import { SaveIllnessType } from '../../../models/usecases';
import { IllnessRepository } from '../../../repositories/implementations/IllnessRepository';
import { DbSaveIllness } from '../../../usecases/DbSaveIllnessType';

container.registerSingleton('IIllnessRepository', IllnessRepository);

container.register<SaveIllnessType>('DbSaveIllness', {
  useClass: DbSaveIllness,
});
