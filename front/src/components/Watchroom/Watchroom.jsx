import w from './Watchroom.module.css';
import Chat from './Chat/Chat';
import Player from './Player/Player';

import { io } from 'socket.io-client';
const socket = io.connect();

function Watchroom(params) {
    socket.on('connection', () => {
        console.log(`Client connected: ${socket.id}`);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    return (
        <div className={w.watchroom}>
            <Player />
            <Chat />
        </div>
    );
}

export default Watchroom;
