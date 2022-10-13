import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const connection = {
  connectionString: process.env.DATABASE_URL,
};

const db = new Pool(connection);
export default db;
