import { Router } from 'express';
// import { getDevice } from '../controllers/DeviceController';
import { getDevice, postDevice } from '../controllers/DeviceController';

const router = Router();

router.get('/:id', getDevice);

router.post('/', postDevice);

export default router;