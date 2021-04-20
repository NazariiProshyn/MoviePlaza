const db = require('./../queries/film_queries');

async function routes(fastify) {
    fastify.get('/test', db.getFilms);
}

module.exports = routes;
