import { Router } from 'express';
import { getDevice } from '../controllers/devicesController';

const router = Router();

router.get('/:id', getDevice);

export default router;