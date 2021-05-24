import getUser from './user';

export const Socket = (io, vars, functions) => {
    const ENDPOINT = vars.ENDPOINT;
    const video = vars.video;
    const room = vars.room;
    let username = vars.username;
    let playPromise = vars.playPromise;
    let seeked = vars.seeked;

    const setSocket = functions.setSocket;
    const setSource = functions.setSource;
    const createMessage = functions.createMessage;

    const socket = io.connect(ENDPOINT);
    setSocket(socket);

    let promiseUser = new Promise(function (resolve, reject) {
        const user = getUser();
        resolve(user);
    });

    promiseUser.then((result) => {
        if (result.name) {
            username = result.name;
        } else {
            username = 'Guest' + String(Math.floor(Math.random() * 10000));
        }
        socket.emit('join_room', { username, room });
    });

    socket.on('message', (message) => {
        console.log(message);
    });

    socket.on('new_user', () => {
        video.currentTime = video.currentTime + 0;
        video.pause();
    });
    socket.on('connect', () => {
        video.muted = true;
        console.log(`Client connected: ${socket.id}`);
    });
    socket.on('change_src', (src) => {
        setSource(`http://localhost:3001/videos/${src}.mp4`);
        document.getElementById('videoPlayer').load();
    });
    // send message to chat
    socket.on('chat_message', (username, pict, text) =>
        createMessage(username, pict, text)
    );

    // play video
    socket.on('play_video', () => {
        playPromise = video.play();
    });
    video.addEventListener('play', () => {
        socket.emit('play_video');
    });

    // stop video
    socket.on('stop_video', () => {
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                video.pause();
                if (seeked) {
                    seeked = false;
                }
            });
        }
    });
    video.addEventListener('pause', () => {
        if (!seeked) {
            socket.emit('stop_video');
        } else {
            seeked = false;
            video.play();
        }
    });

    // change video time
    socket.on('change_time', async (time) => {
        if (
            video.currentTime !== time &&
            Math.abs(video.currentTime - time) >= 0.5
        ) {
            if (!seeked) {
                //video.currentTime = time;
                seeked = true;
                console.log('seeked-change');
            }
            video.currentTime = time;
        }
    });
    video.onseeking = () => {
        seeked = true;
        //console.log('seeked-onseek');
        socket.emit('seeked', video.currentTime);
    };
    // disconnect
    socket.on('disconnect', () => console.log('Client disconnected'));

    const emitOnMessage = (text) => {
        socket.emit('chat_message', text);
    };

    return { emitOnMessage };
};

export const emitOnSourceChange = (currSocket, filmname) => {
    currSocket.emit('change_src', filmname);
};

const methods = { Socket, emitOnSourceChange };
export default methods;
