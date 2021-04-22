const client = require('./client');

const getIsLogin = (request, reply, login, password) => {
    console.log(`SELECT * from CheckUser("${login}", "${password}")`);
    client.query(
        `SELECT * from public.CheckUser('${login}', '${password}')`,
        async (error, results) => {
            if (error) {
                throw error;
            }
            const rows = results.rows;
            console.log(rows);
            if (rows[0].checkuser === 1) {
                request.session.authenticated = true;
                request.session.user = { name: login };
                request.sessionstorage = request.session;
                reply.redirect('/');
                return { success: 'true' };
            } else {
                request.session.authenticated = false;
                reply.redirect(200, '/login');
                return { success: 'false' };
            }
        }
    );
};

module.exports = { getIsLogin };
