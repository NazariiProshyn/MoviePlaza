//const pool = require('./pool');

const getUser = async (id, pool) => {
    let login = await pool.query(
        'SELECT "Login" from "UserInformation" WHERE "UserId"=$1',
        [id]
    );
    login = login.rows[0].Login;
    let user = await pool.query('SELECT * from UserInfo($1)', [login]);
    user = user.rows[0];
    user.login = login;
    return user;
};
const getUserByLogin = async (login, pool) => {
    let user = await pool.query('SELECT * from UserInfo($1)', [login]);
    user = user.rows[0];
    console.log(user);
    if (!user) {
        return { status: 'faled' };
    }
    //user.login = login;
    return user;
};

module.exports = { getUser, getUserByLogin };
