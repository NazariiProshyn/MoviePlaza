const HttpStatus = require('http-status');
const { getLastFilms } = require('../queries/newfilms_queries');
async function routes(fastify) {
    fastify.get('/newfilms', (request, reply) => {
        const films = getLastFilms(request, reply, request.params.id);
        reply.status = HttpStatus.OK;
        return films;
    });
}

module.exports = routes;
