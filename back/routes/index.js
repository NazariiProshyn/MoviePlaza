async function routes(fastify) {
    fastify.get('/', async (request, reply) => {
        const a = {
            status: 'success',
            message: 'hello, world!',
        };
        reply.send(a);
    });
}

module.exports = routes;
