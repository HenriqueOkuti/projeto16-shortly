import { Router } from 'express';
import getUserByToken, {
  getUserRanking,
} from '../controllers/usersControllers.js';
import { validateToken } from '../middlewares/validateToken.js';

const usersRouter = Router();
usersRouter.get('/users/me', validateToken, getUserByToken);
usersRouter.get('/ranking', getUserRanking);

export default usersRouter;
