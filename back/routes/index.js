async function routes(fastify) {
    fastify.get('/', async (request, reply) => {
        let a;

        console.log(request.session.user.name);
        if (request.session.authenticated) {
            a = {
                status: 'success',
                message: request.session.user.name,
            };
        } else {
            a = {
                status: 'failed',
                message: 'you not autorize!',
            };
        }
        reply.send(a);
    });
}

module.exports = routes;
