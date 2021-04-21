const HttpStatus = require('http-status');
const { getUser } = require('../queries/users_queries');
async function routes(fastify) {
    fastify.get('/users/:id', (request, reply) => {
        const users = getUser(request, reply, request.params.id);
        reply.status = HttpStatus.OK;
        return users;
    });
}

module.exports = routes;
