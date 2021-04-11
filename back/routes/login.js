/*
const schema = {
    response: {
        200: {
            'Access-Control-Allow-Origin': {'http://localhost:3000'},
        },
    },
};
*/
async function routes(fastify) {
    fastify.post('/login', async (request, reply) => {
        const { username, password } = request.body;

        if (password === 'test12' && username === 'beata') {
            request.session.authenticated = true;
            request.session.user = { name: 'beata' };
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
