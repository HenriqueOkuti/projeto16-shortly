import db from '../db/connection.js';

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

const urlsRepository = {
  queryCreateShortURL,
  queryGetURLSById,
  queryGetURLByShortURL,
  queryDeleteURL,
  queryUpdateURLVisitCount,
};

export default urlsRepository;
