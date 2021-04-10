const HttpStatus = require('http-status');

async function routes(fastify) {
    fastify.get('/catalog', async (request, reply) => {
        const films = require('./../test/films.json');

        reply.status = HttpStatus.OK;
        reply.headers({ 'Access-Control-Allow-Origin': '*' });
        return films;
    });
}

module.exports = routes;
