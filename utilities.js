const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

var pool = mysql.createPool({
    connectTimeout : 10,
    host : process.env.DB_HOST,
    port: process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export default pool;