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

async function queryGetSessionByToken(token) {
  return db.query(`SELECT *  FROM sessions WHERE token = $1;`, [token]);
}

async function queryGetUserById(id) {
  return db.query(`SELECT * FROM users WHERE id = $1;`, [id]);
}

async function queryCreateShortURL(url, short, user) {
  return db.query(
    `INSERT INTO urls(url, "shortURL", "userId", "createdAt") VALUES ($1, $2, $3, NOW());`,
    [url, short, user.id]
  );
}

async function queryGetURLSById(id) {
  return db.query(`SELECT * FROM urls WHERE id = $1;`, [id]);
}

async function queryGetURLByShortURL(shortUrl) {
  return db.query(`SELECT * FROM urls WHERE "shortURL" = $1;`, [shortUrl]);
}

async function queryUpdateURLVisitCount(urlId) {
  return db.query(
    `UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE id = $1;`,
    [urlId]
  );
}

async function queryDeleteURL(id) {
  return db.query('DELETE FROM urls WHERE id=$1;', [id]);
}

export {
  queryCreateUserQuery,
  queryGetUserByEmail,
  queryCreateUserSession,
  queryGetSessionByToken,
  queryGetUserById,
  queryCreateShortURL,
  queryGetURLSById,
  queryGetURLByShortURL,
  queryUpdateURLVisitCount,
  queryDeleteURL,
};
