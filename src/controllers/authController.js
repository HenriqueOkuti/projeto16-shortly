import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { STATUS_CODE } from '../enums/statusCodes.js';
import authRepository from '../repositories/authRepository.js';

export async function createUser(req, res) {
  const user = req.body;
  try {
    const searchByMail = await authRepository.queryGetUserByEmail(user.email);
    if (searchByMail.rowCount > 0) {
      return res.sendStatus(STATUS_CODE.CONFLICT);
    }
    const { name, email, password } = user;
    await authRepository.queryCreateUserQuery(name, email, password);
    res.sendStatus(STATUS_CODE.CREATED);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.detail);
  }
}

export async function logUser(req, res) {
  const { email, password } = req.body;
  try {
    const searchQuery = await authRepository.queryGetUserByEmail(email);
    const [foundUser] = searchQuery.rows;
    if (!foundUser) {
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }
    if (bcrypt.compareSync(password, foundUser.password)) {
      const token = uuid();
      await authRepository.queryCreateUserSession(token, foundUser.id);
      return res.send({ token: token });
    }
    res.sendStatus(STATUS_CODE.UNAUTHORIZED);
  } catch (error) {
    console.log(error);
    res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
