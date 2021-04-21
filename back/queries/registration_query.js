const client = require('./client');

const getIsRegister = (
    request,
    reply,
    login,
    password,
    bdate,
    firstname,
    lastname
) => {
    console.log(`SELECT * from CheckNick('${login}')`);
    client.query(
        `SELECT * from CheckNick('${login}')`,
        async (error, results) => {
            if (error) {
                throw error;
            }
            const rows = results.rows;
            console.log(rows);
            if (rows[0].checknick === 1) {
                request.session.authenticated = false;
                reply.redirect(200, '/login');
                return { success: 'false' };
            } else {
                client.query(
                    `CALL Registration('${firstname}', '${lastname}', '${bdate}', '${login}', '${password}')`,
                    (error) => {
                        if (error) {
                            throw error;
                        }
                        request.session.authenticated = true;
                        request.session.user = { name: login };
                        request.sessionstorage = request.session;
                        console.log('succes reg');
                        reply.redirect('/');
                        return { success: 'true' };
                    }
                );
            }
        }
    );
};

module.exports = { getIsRegister };
