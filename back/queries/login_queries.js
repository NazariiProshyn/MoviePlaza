const client = require('./client');

const getIsLogin = async (login, password) => {
    console.log('SELECT * from CheckUser($1, $2)', [login, password]);
    const isLogin = await client.query(
        'SELECT * from public.CheckUser($1, $2)',[login, password]);
    return isLogin;
};

module.exports = { getIsLogin };
