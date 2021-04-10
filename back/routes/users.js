const HttpStatus = require('http-status');

async function routes(fastify) {
    fastify.get('/users', async (request, reply) => {
        const users = require('./../test/users.json');
        reply.status = HttpStatus.OK;
        reply.headers({ 'Access-Control-Allow-Origin': '*' });
        return users;
    });
}

module.exports = routes;
