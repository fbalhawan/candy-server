import { Router } from 'express';
// import { getDevice } from '../controllers/DeviceController';
import { postDevice, getDevices } from '../controllers/DeviceController';

const router = Router();

// router.get('/:id', getDevice);
router.get('/', getDevices);

router.post('/', postDevice);

export default router;