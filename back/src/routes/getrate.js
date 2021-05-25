const HttpStatus = require('http-status');
const { getUserRate } = require('../queries/rate_queries');
const pool = require('./../queries/pool');

function routes(fastify, opts, done) {
    fastify.get('/filmuserrate', (request, reply) => {
        const rate = getUserRate(request.query.userid, request.query.filmid, pool);
        reply.status = HttpStatus.OK;
        return rate;
    });
    done();
}

module.exports = routes;