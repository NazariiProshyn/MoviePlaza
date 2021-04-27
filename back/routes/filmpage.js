const HttpStatus = require('http-status');
const { getFilms } = require('../queries/film_queries');
function routes(fastify, opts, done) {
    fastify.get('/catalog/:id', (request, reply) => {
        const films = getFilms(request, reply, request.params.id);
        reply.status = HttpStatus.OK;
        return films;
    });
    done();
}

module.exports = routes;
