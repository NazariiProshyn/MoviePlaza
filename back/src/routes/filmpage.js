const HttpStatus = require('http-status');
const { getFilms } = require('../queries/film_queries');
function routes(fastify, opts, done) {
    fastify.get('/catalog/:id', (request, reply) => {
        const pool = require('./../queries/pool');
        const films = getFilms(request.params.id, pool);
        reply.status = HttpStatus.OK;
        reply.type = 'application/json';
        return films;
    });
    done();
}

module.exports = routes;
