const client = require('./client');

const getFilms = (request, reply, id) => {
    client.query(`SELECT * from FilmPage(${id})`, async (error, results) => {
        if (error) {
            throw error;
        }
        const filmdata = results.rows[0];
        const comm = await client.query(`SELECT * from GetComments(${id})`);
        filmdata.comments = comm.rows;
        console.log(String(filmdata['dateofrelease']));
        filmdata.dateofrelease = String(filmdata['dateofrelease']).split(
            ' '
        )[3];
        reply.send(filmdata);
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
