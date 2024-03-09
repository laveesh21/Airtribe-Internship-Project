import pkg from "pg";
import 'dotenv/config';

const pool = new pkg.Pool({
    user: process.env.DB_USER, 
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE, 
    password: process.env.DB_PASSWORD, 
    port: process.env.PORT,
});

pool.connect()
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Error connecting to database:', err));

export default pool;
