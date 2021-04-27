const HttpStatus = require('http-status');
const { getCatalog } = require('../queries/catalog_queries');

function routes(fastify, opts, done) {
    fastify.get('/catalog', (request, reply) => {
        const films = getCatalog(
            request,
            reply,
            request.query['value'],
            request.query['genre'],
            request.query['yearfrom'],
            request.query['yearto'],
            request.query['lenfrom'],
            request.query['lento'],
            request.query['pricefrom'],
            request.query['priceto'],
            request.query['ratefrom'],
            request.query['rateto']
        );
        reply.status = HttpStatus.OK;
        return films;
    });
    done();
}

module.exports = routes;
