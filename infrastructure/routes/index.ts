import { Router } from 'express';
import illnessRouter from './illness.routes';

const routes = Router();

routes.use('/illness', illnessRouter);

export default routes;
