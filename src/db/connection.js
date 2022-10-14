import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const connection = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

// const connection = {
//   connectionString: 'postgres://postgres:12345@localhost:5432/shortly',
//   ssl: {
//     rejectUnauthorized: false,
//   },
// };

const db = new Pool(connection);
export default db;
