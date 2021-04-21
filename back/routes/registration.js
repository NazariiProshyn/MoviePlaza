const db = require('./../queries/film_queries');

//буде добавлено 21.04
async function routes(fastify) {
    fastify.get('/test', db.getFilms);
}

module.exports = routes;
