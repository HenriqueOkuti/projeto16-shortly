import { Router } from 'express';
import { createUser, logUser } from '../controllers/authController.js';
import { validateSchema } from '../middlewares/validateSchemas.js';
import { userLoginSchema, userSchema } from '../schemas/allSchemas.js';

const authRouter = Router();

authRouter.post('/signup', validateSchema(userSchema), createUser);
authRouter.post('/signin', validateSchema(userLoginSchema), logUser);

export default authRouter;
