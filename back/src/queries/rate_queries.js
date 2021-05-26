const setRate = async (filmid, userid, rate, pool) => {
    await pool.query('CALL filmRait($1, $2, $3)', [filmid, userid, rate]);
};

const getUserRate = async (userid, filmid, pool) => {
    const rate = await pool.query(
        'SELECT * FROM "Rating" WHERE "FilmId" = $1 AND "UserId" = $2',
        [filmid, userid]
    );
    return rate.rows[0];
};

module.exports = { setRate, getUserRate };
