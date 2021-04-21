import c from './Comment.module.css';
import /*React,*/ { useState, useEffect } from 'react';
import axios from 'axios';
function Comment({ work }) {
    const [user, setUser] = useState({});
    //console.log(work);
    useEffect(()=>{
        axios
            .get(
                'http://localhost:3001/users/'+work.userid
            )
            .then(res => res.data).then(res => setUser(res));
    }, [work.userid]
    );
    return (
        <div className={c['comment-block']}>
            <div className={c.avatar}>
                <img
                    className={c['avatar_img']}
                    src={'http://localhost:3001/images/' + user.userImage}
                    alt={user.Login}
                />
            </div>
            <div className={c.author}>
                <p>{user.Login}</p>
            </div>
            <div className={c.comment}>
                <p>{work.comments}</p>
            </div>
        </div>
    );
}
export default Comment;
