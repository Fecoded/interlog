const { createPool } = require('mysql');

const pool = createPool({
    connectionLimit: process.env.LIMIT,
    host: process.env.HOST,
    port: process.env.DBPORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    // connectTimeout  : 60 * 60 * 1000,
    // acquireTimeout  : 60 * 60 * 1000,
    // timeout         : 60 * 60 * 1000,
});

module.exports = pool;