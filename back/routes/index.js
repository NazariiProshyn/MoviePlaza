async function routes(fastify) {
    fastify.get('/', (request, reply) => {
        /*
        if (request.session != null && request.session.authenticated == true) {
            reply.send(request.session.id);
        } else {
            reply.send('fuck');
        }
    */
        let cookies = request.headers.cookie.split(';');
        console.log(cookies);
        let sessionID = cookies[0].substring(10).trim();
        sessionID = sessionID.substring(0, sessionID.indexOf('.'));
        console.log(sessionID);
        /// Collect session and check the authentication state.
        //sessionstore.get(sessionID, (o, session) => {
        if (request.session != null && request.session.authenticated == true) {
            console.log(request.session.user.name);
            reply.send({ name: request.session.user.name });
        } else {
            reply.send({ status: 'not_autorized' });
        }
        //});
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
}

module.exports = routes;