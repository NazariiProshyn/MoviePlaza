const HttpStatus = require('http-status');

async function routes(fastify) {
    fastify.get('/films', async (request, reply) => {
        const val = request.query['value'];
        console.log(val);
        const films = require('./../test/films.json');
        const filter = films.filter((film) => {
            return film.title.toLowerCase().includes(val);
        });
        reply.status = HttpStatus.OK;
        return filter;
    });
}

module.exports = routes;
