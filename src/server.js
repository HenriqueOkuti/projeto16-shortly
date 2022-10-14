import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/router.js';

export default function server() {
  dotenv.config();
  const server = express();
  server.use(cors());
  server.use(json());
  server.use(router);

  const PORT = process.env.PORT || 5000;

  server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
}
