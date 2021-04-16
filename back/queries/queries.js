const { Client } = require('pg');

const client = new Client({
    user: 'movieadmin1',
    host: 'localhost',
    database: 'movieplaza',
    password: 'movieadmin',
    port: 5432,
});
client.connect();

const getFilms = (request, reply) => {
    client.query('SELECT * from "FilmInfo"', (error, results) => {
        if (error) {
            throw error;
        }
        reply.send(results.rows);
    });
};
const insertFilm = (request, response) => {
    client.query(
        'INSERT INTO FROM FilmInfo (GenreId, FilmName, Price, InformationAboutFilm) VALUES (1, FilmName1, 0, testdesc)',
        (error) => {
            if (error) {
                throw error;
            }
            response.status(200).send('Add films success');
        }
    );
};

module.exports = { getFilms, insertFilm };
