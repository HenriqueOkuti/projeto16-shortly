import bcrypt from 'bcrypt';
import db from '../src/db/connection.js';

async function createUserQuery(name, email, plainPassword) {
  const SALT = 10;
  const passwordHash = bcrypt.hashSync(plainPassword, SALT);
  return db.query(
    `
      INSERT INTO users (name, email, password) 
      VALUES ($1, $2, $3)`,
    [name, email, passwordHash]
  );
}

async function getUserByEmail(email) {
  return db.query(`SELECT * FROM users WHERE email = $1 `, [email]);
}

export { createUserQuery, getUserByEmail };
