import db from '../db/connection.js';

async function queryGetVisitSumById(userId) {
  return db.query(
    `SELECT SUM(u."visitCount") FROM urls u WHERE u."userId" = $1;`,
    [userId]
  );
}

async function queryGetURLSbyUserId(userId) {
  return db.query(`SELECT * FROM urls WHERE urls."userId" = $1;`, [userId]);
}

async function queryGetLinksRanking() {
  return db.query(`
    SELECT u2.id, u2.name, COUNT(u1.id) as "linksCount", SUM(u1."visitCount") as "visitCount"
    FROM urls u1
    JOIN users u2 ON u1."userId" = u2.id
    GROUP BY u2.id
    ORDER BY "visitCount" DESC
    LIMIT 10;
  `);
}

const usersRepository = {
  queryGetVisitSumById,
  queryGetURLSbyUserId,
  queryGetLinksRanking,
};

export default usersRepository;
