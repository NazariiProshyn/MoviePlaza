const HttpStatus = require('http-status');
const { getFilms } = require('../queries/film_queries');
async function routes(fastify) {
    fastify.get('/catalog/:id', async (request, reply) => {
        const films = getFilms(request, reply, request.params.id);
        reply.status = HttpStatus.OK;
        return films;
    });
}

module.exports = routes;
