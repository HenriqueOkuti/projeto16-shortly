import { STATUS_CODE } from '../enums/statusCodes.js';
import { createUserQuery, getUserByEmail } from '../queries/queries.js';

export async function createUser(req, res) {
  const user = req.body;
  try {
    const searchByMail = getUserByEmail(user.email);
    if (searchByMail.rowCount > 0) {
      return res.sendStatus(STATUS_CODE.CONFLICT);
    }
    const { name, email, password } = user;
    await createUserQuery(name, email, password);
    res.sendStatus(STATUS_CODE.CREATED);
  } catch (error) {
    return res.send(error.detail).status(STATUS_CODE.SERVER_ERROR);
  }
}
