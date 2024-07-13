import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const router = Router();
const authController = new AuthController();

router.post('/signup', authController.signUp);
router.post('/login', authController.logIn);
// router.post('/verifytoken', authController.verifyToken)
router.get('/test', authController.test);

export default router;
