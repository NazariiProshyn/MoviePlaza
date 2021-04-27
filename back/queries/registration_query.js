const pool = require('./pool');

const getIsRegister = async (
    login,
    password,
    bdate,
    firstname,
    lastname
) => {
    console.log('SELECT * from CheckNick($1)', [login]);
    const isNickFree = await pool.query(
        'SELECT * from CheckNick($1)', [login]);
    
    if (isNickFree.rows[0].checknick === 1) {
        return { success: 'false' };
    } else {
        await pool.query(
            'CALL Registration($1, $2, $3, $4, $5)', [firstname, lastname, bdate, login, password]);
        return { success: 'true' };
    }
};


module.exports = { getIsRegister };
