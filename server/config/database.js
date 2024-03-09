import { Pool } from "pg";
import 'dotenv/config'

const pool = new Pool({
    user: process.env., 
    host: 'your_host',
    database: 'your_database', 
    password: 'your_password', 
    port: 5432,
});

export default pool;
