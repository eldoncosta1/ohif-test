import { Router } from 'express';
import IllnessController from '../controllers/IllnessController';

const illnessRouter = Router();

const illnessController = new IllnessController();

illnessRouter.post('/', illnessController.create);

export default illnessRouter;
