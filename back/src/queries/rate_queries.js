const setRate = async (filmid, userid, rate, pool) => {
    await pool.query(
        'CALL filmRait($1, $2, $3)',
        [filmid, userid, rate]
    );
};

module.exports = { setRate };