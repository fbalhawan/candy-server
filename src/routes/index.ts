import { Router } from 'express';
import device from './device';
import { auth } from '../middlewares/auth';

const router = Router();

router.use('/devices',auth,device);

export default router;