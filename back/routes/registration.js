const { getIsRegister } = require('../queries/registration_query');

function routes(fastify, opts, done) {
    fastify.post('/registration', async (request) => {
        const {
            username,
            firstname,
            lastname,
            dateofbirthday,
            password,
        } = JSON.parse(request.body);
        const user = await getIsRegister(
            username,
            password,
            dateofbirthday,
            firstname,
            lastname
        );
        if (user.success) {
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
