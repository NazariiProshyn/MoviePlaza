import c from './Comment.module.css';
import { /*React,*/ useState, useEffect } from 'react';

function Comment({ work }) {
    const [user, setUser] = useState({});
    //console.log(work);
    useEffect(() => {
        fetch('http://localhost:3001/users/' + work.userid)
            .then((res) => res.json())
            .then((res) => setUser(res));
    }, [work.userid]);
    return (
        <div className={c['comment-block']}>
            <div className={c.avatar}>
                <img
                    className={c['avatar_img']}
                    src={'http://localhost:3001/images/' + user.userImage}
                    alt={work.userid}
                />
            </div>
            <div className={c.author}>
                <p>{work.userid}</p>
            </div>
            <div className={c.comment}>
                <p>{work.comments}</p>
            </div>
        </div>
    );
}
export default Comment;
