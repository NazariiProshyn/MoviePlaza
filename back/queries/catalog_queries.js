const client = require('./client');

const getCatalog = (request, reply, id) => {
    client.query(`SELECT * from FilmPage(${id})`, (error, results) => {
        if (error) {
            throw error;
        }
        reply.send(results.rows[0]);
    });
};

module.exports = { getCatalog };
