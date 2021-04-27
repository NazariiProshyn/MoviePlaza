const client = require('./client');

const getFilms = async (id) => {
    let filmdata = await client.query('SELECT * from FilmPage($1)',[id]);
    filmdata = filmdata.rows[0];
    const comm = await client.query('SELECT * from GetComments($1)',[id]);
    filmdata.comments = comm.rows;
    const genres = await client.query('SELECT * from GetGenres($1)',[id]);
    let genrows = genres.rows;
    let filmgenre = [];
    for (let i = 0; i < genrows.length; i++) {
        filmgenre.push(genrows[i]['genre']);
    }
    filmdata.genres = filmgenre;
    return filmdata;
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
