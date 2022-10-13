import { createUserQuery, getUserByEmail } from '../queries/queries.js';

export async function createUser(req, res) {
  const user = req.body;
  try {
    const searchByMail = getUserByEmail(user.email);
    if (searchByMail.rowCount > 0) {
      return res.sendStatus(409);
    }
    const { name, email, password } = user;
    await createUserQuery(name, email, password);
    res.sendStatus(201);
  } catch (error) {
    console.log(error.detail);
    return res.send(error.detail).status(500);
  }
}
