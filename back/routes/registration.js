const { getIsRegister } = require('../queries/registration_query');

async function routes(fastify) {
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
}

module.exports = routes;
