async function routes(fastify) {
    fastify.get('/room/:id', (request, reply) => {
        reply.send('room');
    });
}

module.exports = routes;
