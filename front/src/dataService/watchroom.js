import getUser from './user';

export const Socket = (io, vars, functions) => {
    const ENDPOINT = vars.ENDPOINT;
    const video = vars.video;
    const room = vars.room;
    let username = vars.username;
    let playPromise = vars.playPromise;

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
        video.pause();
        video.removeEventListener('play', play);
        video.removeEventListener('pause', stop);
        video.currentTime = video.currentTime + 0;
        setTimeout(() => {
            video.addEventListener('play', play);
            video.addEventListener('pause', stop);
        }, 1000);
    });
    socket.on('connect', () => {
        video.muted = true;
        console.log(`Client connected: ${socket.id}`);
    });
    socket.on('change_src', (src) => {
        setSource(
            `https://res.cloudinary.com/movieplaza/video/upload/${src}.mp4`
        );
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
    const play = () => {
        socket.emit('play_video');
    };
    video.addEventListener('play', play);

    // stop video
    const stop = () => {
        socket.emit('stop_video');
    };
    socket.on('stop_video', () => {
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                video.pause();
            });
        }
    });
    video.addEventListener('pause', stop);

    // change video time
    socket.on('change_time', async (time) => {
        if (
            video.currentTime !== time &&
            Math.abs(video.currentTime - time) >= 0.5
        ) {
            video.removeEventListener('play', play);
            video.removeEventListener('pause', stop);
            video.currentTime = time;
            setTimeout(() => {
                video.addEventListener('play', play);
                video.addEventListener('pause', stop);
            }, 1000);
        }
    });
    video.onseeking = () => {
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
