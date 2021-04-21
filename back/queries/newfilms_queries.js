const client = require('./client');

const getLastFilms = (request, reply) => {
    client.query('SELECT * from LastFilms()', async (error, results) => {
        if (error) {
            throw error;
        }
        reply.send(results.rows);
    });
};

module.exports = { getLastFilms };
