const axios = require('axios');
const {
    getFilm,
    changefilm,
    userJoin,
    getCurrentUser,
    userLeave,
} = require('./queries/users');

function watchroomsocket(app) {
    //if (err) throw err;
    (err) => {
        if (err) throw err;
        const pool = require('./queries/pool');
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
    };
}

module.exports = watchroomsocket;
