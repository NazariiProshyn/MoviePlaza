const pool = require('./pool');

const getIsLogin = async (login, password) => {
    const isLogin = await pool.query('SELECT * from public.CheckUser($1, $2)', [
        login,
        password,
    ]);
    console.log(isLogin.rows[0].checkuser);
    return isLogin.rows[0].checkuser;
};

module.exports = { getIsLogin };
