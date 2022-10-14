import bcrypt from 'bcrypt';
import db from '../db/connection.js';

async function createUserQuery(name, email, plainPassword) {
  const SALT = 10;
  const passwordHash = bcrypt.hashSync(plainPassword, SALT);
  return db.query(
    `
      INSERT INTO users (name, email, password, "createdAt") 
      VALUES ($1, $2, $3, NOW())`,
    [name, email, passwordHash]
  );
}

async function getUserByEmail(email) {
  return db.query(`SELECT * FROM users WHERE email = $1 `, [email]);
}

async function createUserSession(token, userId) {
  return db.query(
    `INSERT INTO sessions (token, "userId", "createdAt") VALUES ($1, $2, NOW())`,
    [token, userId]
  );
}

async function getSessionByToken(token) {
  return db.query(`SELECT *  FROM sessions WHERE token = $1`, [token]);
}

async function getUserById(id) {
  return db.query(`SELECT * FROM users WHERE id = $1 `, [id]);
}

async function createShortURL(url, short, user) {
  return db.query(
    `
  INSERT INTO urls(url, "shortURL", "userId", "createdAt")
  VALUES ($1, $2, $3, NOW())`,
    [url, short, user.id]
  );
}

async function getURLSById(id) {
  return db.query(`SELECT * FROM urls WHERE id = $1`, [id]);
}

export {
  createUserQuery,
  getUserByEmail,
  createUserSession,
  getSessionByToken,
  getUserById,
  createShortURL,
  getURLSById,
};
