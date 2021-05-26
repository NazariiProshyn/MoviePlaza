const { setRate } = require('../queries/rate_queries');
const pool = require('./../queries/pool');

function routes(fastify, opts, done) {
    fastify.post('/setrate', async (request) => {
        const { rate, userid, filmid } = request.body;
        await setRate(filmid, userid, rate, pool);
        return { success: 'true' };
    });
    done();
}
module.exports = routes;
