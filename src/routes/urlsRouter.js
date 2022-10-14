import { Router } from 'express';
import shortenURL from '../controllers/urlsController.js';
import { validateSchema } from '../middlewares/validateSchemas.js';
import { validateToken } from '../middlewares/validateToken.js';
import { urlSchema } from '../schemas/schemas.js';

const urlsRouter = Router();
urlsRouter.post(
  '/urls/shorten',
  validateSchema(urlSchema),
  validateToken,
  shortenURL
);

export default urlsRouter;
