const pool = require('./pool');

const addComment = async (filmid, comment, userid) => {
    await pool.query(
        'INSERT INTO "Comments"("FilmId", "Comment", "UserId") VALUES($1, $2, $3)',
        [filmid, comment, userid]
    );
};

module.exports = { addComment };
