const client = require('./client');

const getLastFilms = async () => {
    const lastfilm = await client.query('SELECT * from LastFilms()');
    return lastfilm.rows;
};

module.exports = { getLastFilms };
