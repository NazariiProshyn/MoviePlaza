const { getIsLogin } = require('../queries/login_queries');

function routes(fastify, opts, done) {
    fastify.post('/login', async (request) => {
        let logindata;
        try {
            logindata = JSON.parse(request.body);
        } catch (error) {
            logindata = request.body;
        }
        const { username, password } = logindata;
        const pool = require('./../queries/pool');
        const user = await getIsLogin(username, password, pool);
        if (user) {
            request.session.authenticated = true;
            request.session.user = { name: username, id: user };
            request.sessionstorage = request.session;
            return { success: 'true' };
        } else {
            request.session.authenticated = false;
            return { success: 'false' };
        }
    });
    done();
}
module.exports = routes;
