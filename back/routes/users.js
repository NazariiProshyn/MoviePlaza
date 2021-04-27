const HttpStatus = require('http-status');
const { getUser } = require('../queries/users_queries');
function routes(fastify, opts, done) {
    fastify.get('/users/:id', (request, reply) => {
        const users = getUser(request, reply, request.params.id);
        reply.status = HttpStatus.OK;
        return users;
    });
    done();
}

module.exports = routes;
