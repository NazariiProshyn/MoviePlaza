const client = require('./client');

const getUser = async (id) => {
    let login = await client.query('SELECT "Login" from "UserInformation" WHERE "UserId"=$1', [id]);
    login = login.rows[0].Login;
    let user = await client.query('SELECT * from UserInfo($1)', [login]);
    user = user.rows[0];
    user.login = login;
    return user;
};
const getUserByLogin = async (login) => {
    let user = await client.query('SELECT * from UserInfo($1)', [login]);
    user = user.rows[0];
    //user.login = login;
    return user;
};

module.exports = { getUser, getUserByLogin };
