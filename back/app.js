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
    cookie: { secure: false, path: '/' },
    expires: 900000,
});

fastify.register(require('fastify-cors'), {
    origin: 'http://localhost:3000',

    credentials: 'same-origin',
    allowMethods:
        'PROPFIND, PROPPATCH, COPY, MOVE, DELETE, MKCOL, LOCK, UNLOCK, PUT, GETLIB, VERSION-CONTROL, CHECKIN, CHECKOUT, UNCHECKOUT, REPORT, UPDATE, CANCELUPLOAD, HEAD, OPTIONS, GET, POST',
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'X-Custom-Header',
        'X-Requested-With',
        'Cookie',
    ],
});
//fastify.register(routes);
fastify.register(require('./routes/index'));
fastify.register(require('./routes/login'));
fastify.register(require('./routes/filmImg'));
fastify.register(require('./routes/films'));
fastify.register(require('./routes/users'));
fastify.register(require('./routes/videos'));


const io = require('socket.io')(fastify.server);

io.on('connection', function (socket) {
    console.log('server connected');
    
    socket.on('disconnect', function () {
        console.log('server disconnected');
    });
});



const start = async () => {
    try {
        await fastify.listen(3001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
