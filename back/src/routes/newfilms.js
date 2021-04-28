const HttpStatus = require('http-status');
const { getLastFilms } = require('../queries/newfilms_queries');
function routes(fastify, opts, done) {
    fastify.get('/newfilms', (request, reply) => {
        const films = getLastFilms();
        reply.status = HttpStatus.OK;
        return films;
    });
    done();
}

module.exports = routes;
