const { addComment } = require('../queries/comment_queries');

function routes(fastify, opts, done) {
    fastify.post('/commentadd', async (request) => {
        let commentdata;
        try {
            commentdata = JSON.parse(request.body);
        } catch {
            commentdata = request.body;
        }
        const { comments, userid, filmid } = commentdata;
        const pool = require('./../queries/pool');
        await addComment(filmid, comments, userid, pool);
        return { success: 'true' };
    });
    done();
}
module.exports = routes;
