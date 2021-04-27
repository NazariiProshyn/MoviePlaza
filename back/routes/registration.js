const { getIsRegister } = require('../queries/registration_query');

function routes(fastify, opts, done) {
    fastify.post('/registration', (request, reply) => {
        const {
            username,
            firstname,
            lastname,
            dateofbirthday,
            password,
        } = request.body;
        const user = getIsRegister(
            request,
            reply,
            username,
            password,
            dateofbirthday,
            firstname,
            lastname
        );
        return user;
    });
    done();
}

module.exports = routes;
