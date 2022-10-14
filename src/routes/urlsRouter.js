import { Router } from 'express';
import {
  shortenURL,
  getURLByID,
  redirectURL,
  deleteURL,
} from '../controllers/urlsController.js';
import { validateSchema } from '../middlewares/validateSchemas.js';
import { validateToken } from '../middlewares/validateToken.js';
import { urlSchema } from '../schemas/allSchemas.js';

const urlsRouter = Router();
urlsRouter.post(
  '/urls/shorten',
  validateSchema(urlSchema),
  validateToken,
  shortenURL
);
urlsRouter.get('/urls/:id', getURLByID);
urlsRouter.get('/urls/open/:shortUrl', redirectURL);
urlsRouter.delete('/urls/:id', validateToken, deleteURL);

export default urlsRouter;
