const fastify = require('fastify');
const axios = require('axios');
const app = fastify();
const fastifySession = require('fastify-session');
const fastifyCookie = require('fastify-cookie');
const {
    getFilm,
    changefilm,
    userJoin,
    getCurrentUser,
    userLeave,
} = require('./src/queries/users');
app.register(fastifyCookie);

app.register(require('fastify-socket.io'), {
    cors: { origin: '*' },
});

const pgSession = require('connect-pg-simple')(fastifySession);

app.register(fastifySession, {
    store: new pgSession({
        conString:
            'postgres://movieadmin1:movieadmin@localhost:5432/movieplaza',
        tableName: 'session',
    }),
    cookieName: 'sessionId',
    secret: '1qwqwqwwhjehu2372e8ywhdhu92e8uids',
    cookie: { secure: false, path: '/', maxAge: 7 * 24 * 60 * 60 * 1000 }, //срок дії cookie 7 днів, протокол http(secure: false)
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

app.register(require('./src/routes/index'));
app.register(require('./src/routes/login'));
app.register(require('./src/routes/filmImg'));
app.register(require('./src/routes/filmpage'));
app.register(require('./src/routes/newfilms'));
app.register(require('./src/routes/filmsearch'));
app.register(require('./src/routes/users'));
app.register(require('./src/routes/profile'));
app.register(require('./src/routes/videos'));
app.register(require('./src/routes/registration'));
app.register(require('./src/routes/commentadd'));
app.register(require('./src/routes/update_user'));

app.ready((err) => {
    if (err) throw err;
    const pool = require('./src/queries/pool');
    app.io.on('connection', (socket) => {
        socket.on('join_room', async ({ username, room }) => {
            const user = await userJoin(socket.id, username, room, pool);
            socket.join(user.room);

            socket.emit(
                'message',
                'Welcome to the MoviePlaza! Room: ' + user.room
            );

            socket.broadcast
                .to(user.room)
                .emit('message', `${user.username} has joined the room`);
            socket.broadcast.to(user.room).emit('new_user');
            const film = await getFilm(user.room, pool);
            if (film) {
                socket.emit('change_src', film.film);
            }
        });

        socket.on('chat_message', async (message) => {
            const user = await getCurrentUser(socket.id, pool);
            const user_data = await axios
                .get('http://localhost:3001/profile/' + user.username)
                .then((res) => res.data);
            let picture = 'user.png';

            if (user_data.userimage) {
                picture = user_data.userimage;
            }
            app.io
                .to(user.room)
                .emit('chat_message', user.username, picture, message);
        });

        socket.on('play_video', async () => {
            const user = await getCurrentUser(socket.id, pool);
            console.log('video started');
            socket.broadcast.to(user.room).emit('play_video');
        });

        socket.on('stop_video', async () => {
            const user = await getCurrentUser(socket.id, pool);
            console.log('video paused');
            socket.broadcast.to(user.room).emit('stop_video');
        });

        socket.on('seeked', async (time) => {
            const user = await getCurrentUser(socket.id, pool);
            console.log('time changed to: ' + time);
            socket.broadcast.to(user.room).emit('change_time', time);
        });

        socket.on('change_src', async (filmname) => {
            const user = await getCurrentUser(socket.id, pool);
            await changefilm(user.room, filmname, pool);
            console.log('film changed to: ' + filmname);
            app.io.to(user.room).emit('change_src', filmname);
        });

        socket.on('disconnect', async () => {
            const user = await userLeave(socket.id, pool);
            if (user) {
                app.io
                    .to(user.room)
                    .emit('message', `${user.username} has left the room`);
            }
        });
    });
});

module.exports = app;
