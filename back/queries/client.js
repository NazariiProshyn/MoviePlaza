const { Client } = require('pg');

const client = new Client({
    user: 'movieadmin1',
    host: 'localhost',
    database: 'movieplaza',
    password: 'movieadmin',
    port: 5432,
});
client.connect();

module.exports = client;
