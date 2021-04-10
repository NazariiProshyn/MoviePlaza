const HttpStatus = require('http-status');
const fs = require('fs');

async function routes(fastify) {
    fastify.get('/images/:file', async (request, reply) => {
        const name = request.params.file;
        const films = fs.createReadStream('./images/' + name);
        reply.type('image/png');
        reply.status = HttpStatus.OK;
        reply.send(films);
    });
}

module.exports = routes;
