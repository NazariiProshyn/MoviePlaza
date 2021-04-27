const { getIsLogin } = require('../queries/login_queries');

function routes(fastify, opts, done) {
    fastify.post('/login', (request, reply) => {
        const { username, password } = request.body;
        const user = getIsLogin(request, reply, username, password);
        console.log(user);
        return user;
    });
    done();
}
module.exports = routes;
