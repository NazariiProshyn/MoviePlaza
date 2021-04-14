const fastify = require('fastify');

const app = fastify({ logger: true });
const fastifySession = require('fastify-session');
const fastifyCookie = require('fastify-cookie');
let sessionstore = new fastifySession.MemoryStore();

app.register(fastifyCookie);

app.register(require('fastify-socket.io'), {
    cors: { origin: '*' },
});

app.register(fastifySession, {
    store: sessionstore,
    cookieName: 'sessionId',
    secret: '1qwqwqwwhjehu2372e8ywhdhu92e8uids',
    cookie: { secure: false, path: '/' },
    expires: 900000,
});

app.register(require('fastify-cors'), {
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

app.register(require('./routes/index'));
app.register(require('./routes/login'));
app.register(require('./routes/filmImg'));
app.register(require('./routes/films'));
app.register(require('./routes/users'));
app.register(require('./routes/videos'));
app.register(require('./routes/rooms'));

app.ready((err) => {
    if (err) throw err;
    app.io.on('connection', (socket) => {
        console.log('Socket connected!');

        socket.on('chat_message', (message) => {
            console.log(message);
            app.io.emit('chat_message', socket.id.substr(0, 2), message);
        });

        socket.on('play_video', () => {
            console.log('video started');
            app.io.emit('play_video');
        });

        socket.on('stop_video', () => {
            console.log('video paused');
            app.io.emit('stop_video');
        });

        socket.on('seeked', (time) => {
            console.log('time changed to: ' + time);
            app.io.emit('change_time', time);
        });
        socket.on('disconnect', () => {
            socket.disconnect();
            console.log('Socket disconnected!');
        });
    });
});

app.listen(3001, (err) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});
