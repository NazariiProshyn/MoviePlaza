import w from './Watchroom.module.css';
import Chat from './Chat/Chat';
import Player from './Player/Player';

function Watchroom(params) {
    return (
        <div className={w.watchroom}>
            <Player/>
            <Chat/>
        </div>
    );
}

export default Watchroom;
