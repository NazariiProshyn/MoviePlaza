const db = require('./../queries/queries');

async function routes(fastify) {
    fastify.get('/test', db.getFilms);
}

module.exports = routes;
