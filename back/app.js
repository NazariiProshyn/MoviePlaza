//const Koa = require('koa');
//const HttpStatus = require('http-status');
//const fs = require('fs');
const fastify = require('fastify')({
    logger: true,
});
const fastifySession = require('fastify-session');
const fastifyCookie = require('fastify-cookie');
fastify.register(fastifyCookie);
let sessionstore = new fastifySession.MemoryStore();
fastify.register(fastifySession, {
    store: sessionstore,
    cookieName: 'sessionId',
    secret: '1qwqwqwwhjehu2372e8ywhdhu92e8uids',
    cookie: { secure: false },
    expires: 900000,
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
fastify.register(require('fastify-cors'), {
    origin: 'http://localhost:3000',

    credentials: true,
    allowMethods:
        'PROPFIND, PROPPATCH, COPY, MOVE, DELETE, MKCOL, LOCK, UNLOCK, PUT, GETLIB, VERSION-CONTROL, CHECKIN, CHECKOUT, UNCHECKOUT, REPORT, UPDATE, CANCELUPLOAD, HEAD, OPTIONS, GET, POST',
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'X-Custom-Header',
        'X-Requested-With',
    ],
});

fastify.register(require('./routes/index'));
fastify.register(require('./routes/login'));
fastify.register(require('./routes/filmImg'));
fastify.register(require('./routes/films'));
fastify.register(require('./routes/users'));
fastify.register(require('./routes/videos'));
/*
const BodyParser = require('koa-bodyparser');
const Logger = require('koa-logger');
const cors = require('koa-cors');
const home = require('./routes/index');
const users = require('./routes/users');
const films = require('./routes/films');
const video = require('./routes/videos');
const filmsImg = require('./routes/filmImg');
const app = new Koa();

app.use(BodyParser());
app.use(Logger());
app.use(cors());
app.use(home.routes());
app.use(users.routes());
app.use(films.routes());
app.use(video.routes());
app.use(filmsImg.routes());
*/
const start = async () => {
    try {
        await fastify.listen(3001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
