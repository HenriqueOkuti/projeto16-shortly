import { Router } from 'express';
import { createUser } from '../controllers/authController.js';
import { validateSchema } from '../middlewares/validateSchemas.js';
import { userSchema } from '../schemas/schemas.js';

const authRouter = Router();

authRouter.post('/signup', validateSchema(userSchema), createUser);
authRouter.post('/signin', () => {});

export default authRouter;
