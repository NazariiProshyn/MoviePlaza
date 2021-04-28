const pool = require('./pool');

const getLastFilms = async () => {
    const lastfilm = await pool.query('SELECT * from LastFilms()');
    return lastfilm.rows;
};

module.exports = { getLastFilms };
