async function routes(fastify) {
    fastify.post('/login', async (request, reply) => {
        const users = require('./../test/users.json');
        const { username, password } = request.body;
        const a = users.filter((user) => {
            return user.username === username && user.password === password;
        });

        if (a) {
            request.session.authenticated = true;
            request.session.user = { name: a[0].username };
            request.sessionstorage = request.session;
            reply.redirect('/');
            return { success: 'true' };
        } else {
            request.session.authenticated = false;
            reply.redirect(401, '/login');
            return { success: 'false' };
        }
    });
}
module.exports = routes;
