const HttpStatus = require('http-status');
const fs = require('fs');

function routes(fastify) {
    fastify.get('/images/:file', (request, reply) => {
        const name = request.params.file;
        const films = fs.createReadStream('./images/' + name);
        reply.type('image/png');
        reply.status = HttpStatus.OK;
        reply.send(films);
    });
}

module.exports = routes;
