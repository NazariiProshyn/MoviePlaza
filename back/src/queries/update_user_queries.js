const pool = require('./pool');

const changeUserInfo = async (
    firstname,
    secondname,
    bdate,
    favourgenre,
    login
) => {
    await pool.query('CALL UpdateUserInfo($1, $2, $3, $4, $5)', [
        firstname,
        secondname,
        bdate,
        favourgenre,
        login,
    ]);
};

module.exports = { changeUserInfo };
