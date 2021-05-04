const { getIsRegister } = require('../queries/registration_query');

function routes(fastify, opts, done) {
    fastify.post('/registration', async (request) => {
        let regdata;
        try {
            regdata = JSON.parse(request.body);
        } catch (error) {
            regdata = request.body;
        }
        const {
            username,
            firstname,
            lastname,
            dateofbirthday,
            password,
        } = regdata;
        const pool = require('./../queries/pool');
        const user = await getIsRegister(
            username,
            password,
            dateofbirthday,
            firstname,
            lastname,
            pool
        );
        if (user) {
            request.session.authenticated = true;
            request.session.user = { name: username, id: user };
            request.sessionstorage = request.session;
            return { success: 'true', userid: user };
        } else {
            request.session.authenticated = false;
            return { success: 'false' };
        }
    });
    done();
}

module.exports = routes;
