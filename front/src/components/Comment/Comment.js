import React from 'react';
import './Comment.css';
function Comment({ work }) {
    console.log(work);
    return (
        <div className="comment">
            <div className="avatarCom">
                <img
                    className="avatarImg"
                    src={work.avatar}
                    alt={work.nikname}
                />
            </div>
            <div className="avtor">
                <p>{work.nikname}</p>
            </div>
            <div className="commenttext">
                <p>{work.comment}</p>
            </div>
        </div>
    );
}
export default Comment;
