const { Pool } = require('pg');
const db = process.env.NODE_ENV === 'test' ? 'movieplaza_test' : 'movieplaza';
const pool = new Pool({
    user: 'movieadmin1',
    host: 'localhost',
    database: db,
    password: 'movieadmin',
    port: 5432,
});
pool.connect();

module.exports = pool;
