const HttpStatus = require('http-status');

async function routes(fastify) {
    fastify.get('/users', async (request, reply) => {
        const users = require('./../test/users.json');
        reply.status = HttpStatus.OK;
        return users;
    });
}

module.exports = routes;
