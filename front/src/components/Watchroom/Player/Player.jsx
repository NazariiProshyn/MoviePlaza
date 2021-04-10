import p from './Player.module.css';

function Player(params) {
    return (
        <div className={p['watchroom-player']}>
            <video className = {p['video']} id="videoPlayer" controls>
                <source src='http://localhost:3001/videos/testvideo.mp4'/> 
            </video>
        </div>
    );
}

export default Player;
