import bcrypt from 'bcrypt';
import db from '../db/connection.js';

async function queryCreateUserQuery(name, email, plainPassword) {
  const SALT = 10;
  const passwordHash = bcrypt.hashSync(plainPassword, SALT);
  return db.query(
    `INSERT INTO users (name, email, password, "createdAt") VALUES ($1, $2, $3, NOW());`,
    [name, email, passwordHash]
  );
}

async function queryGetUserByEmail(email) {
  return db.query(`SELECT * FROM users WHERE email = $1 `, [email]);
}

async function queryCreateUserSession(token, userId) {
  return db.query(
    `INSERT INTO sessions (token, "userId", "createdAt") VALUES ($1, $2, NOW());`,
    [token, userId]
  );
}

const authRepository = {
  queryCreateUserQuery,
  queryGetUserByEmail,
  queryCreateUserSession,
};

export default authRepository;
