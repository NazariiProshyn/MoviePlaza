const { addComment } = require('../queries/comment_queries');

function routes(fastify, opts, done) {
    fastify.post('/commentadd', async (request) => {
        const { comments, userid, filmid } = JSON.parse(request.body);
        const pool = require('./../queries/pool');
        await addComment(filmid, comments, userid, pool);
    });
    done();
}
module.exports = routes;
