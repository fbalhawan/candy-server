import { Router } from 'express';
import device from './device';
import { auth } from '../middlewares/auth';

const router = Router();

router.use('/device', auth, device);

export default router;