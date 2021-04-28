const { addComment } = require('../queries/comment_queries');

function routes(fastify, opts, done) {
    fastify.post('/commentadd', async (request) => {
        const { comments, userid, filmid } = JSON.parse(request.body);
        console.log(request.body);
        await addComment(filmid, comments, userid);
    });
    done();
}
module.exports = routes;
