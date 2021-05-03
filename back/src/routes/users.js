const HttpStatus = require('http-status');
const { getUser } = require('../queries/users_queries');
function routes(fastify, opts, done) {
    fastify.get('/users/:id', (request, reply) => {
        const pool = require('./../queries/pool');
        const users = getUser(request.params.id, pool);
        reply.status = HttpStatus.OK;
        return users;
    });
    done();
}

module.exports = routes;
