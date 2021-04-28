const HttpStatus = require('http-status');
const { getUserByLogin } = require('../queries/users_queries');
function routes(fastify, opts, done) {
    fastify.get('/profile/:login', (request, reply) => {
        const users = getUserByLogin(request.params.login);
        reply.status = HttpStatus.OK;
        return users;
    });
    done();
}

module.exports = routes;
