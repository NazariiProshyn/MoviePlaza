const { getIsLogin } = require('../queries/login_queries');

async function routes(fastify) {
    fastify.post('/login', async (request, reply) => {
        const { username, password } = request.body;
        const user = getIsLogin(request, reply, username, password);
        return user;
    });
}
module.exports = routes;
