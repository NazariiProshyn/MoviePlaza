const { Pool } = require('pg');

const pool = new Pool({
    user: 'movieadmin1',
    host: 'localhost',
    database: 'movieplaza',
    password: 'movieadmin',
    port: 5432,
});
pool.connect();

module.exports = pool;
