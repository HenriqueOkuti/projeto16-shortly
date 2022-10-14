import { STATUS_CODE } from '../enums/statusCodes.js';
import {
  queryGetSessionByToken,
  queryGetUserById,
} from '../queries/allQueries.js';

export async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(STATUS_CODE.UNAUTHORIZED).send('Missing token');
  }
  try {
    const searchQuerySession = await queryGetSessionByToken(token);
    const [session] = searchQuerySession.rows;
    if (!session) {
      return res.status(STATUS_CODE.UNAUTHORIZED).send('No session');
    }
    const searchQueryUser = await queryGetUserById(session.userId);
    const [user] = searchQueryUser.rows;
    if (!user) {
      return res.status(STATUS_CODE.UNAUTHORIZED).send('No user');
    }
    res.locals.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
