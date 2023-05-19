import { Router } from 'express';
import device from './device';

const router = Router();

router.use('/devices', device);

export default router;