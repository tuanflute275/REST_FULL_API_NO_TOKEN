import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config()

// // create the connection to database

console.log("Creating connection pool...");

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    database: process.env.DATABASE_NAME || 'quan_li_cong_nhan',
})


export default pool;