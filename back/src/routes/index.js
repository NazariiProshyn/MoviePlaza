function routes(fastify, opts, done) {
    fastify.get('/', (request, reply) => {
        if (!request.headers.cookie) {
            reply.send({ status: 'not_autorized' });
        }
        let cookies = request.headers.cookie.split(';');
        let sessionID = cookies[0].substring(10).trim();
        sessionID = sessionID.substring(0, sessionID.indexOf('.'));
        console.log(sessionID);
        if (request.session != null && request.session.authenticated == true) {
            reply.send({
                name: request.session.user.name,
                id: request.session.user.id,
            });
        } else {
            reply.send({ status: 'not_autorized' });
        }
    });

    // add a logout route
    fastify.get('/logout', (request, reply) => {
        if (request.session.authenticated) {
            request.destroySession((err) => {
                if (err) {
                    reply.status(500);
                    reply.send('Internal Server Error');
                } else {
                    reply.redirect('/');
                }
            });
        } else {
            reply.redirect('/');
        }
    });
    done();
}

module.exports = routes;
