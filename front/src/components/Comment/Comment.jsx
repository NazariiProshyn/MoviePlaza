import c from './Comment.module.css';
import { useState, useEffect } from 'react';
import { setUsersComments } from '../../dataService/comment';

function Comment({ comments }) {
    const [user, setUser] = useState({});

    // Отримуємо інформацію про користувача
    useEffect(() => {
        setUsersComments(comments.userid, setUser);
    }, [comments.userid]);

    return (
        <div className={c['comment-block']}>
            <div className={c.avatar}>
                <img
                    className={c['avatar_img']}
                    src={'http://localhost:3001/images/' + user.userimage}
                    alt={comments.userid}
                />
            </div>
            <div className={c.author}>
                <p className={c.login}>{user.login}</p>
                <p className={c.date}>
                    {comments.commentdate === ''
                        ? new Date().toLocaleDateString().split('.').join('-') +
                          ' ' +
                          new Date().toLocaleTimeString('ua-UA')
                        : comments.commentdate
                            .split('T')
                            .join(' ')
                            .split('.')[0]}
                </p>
            </div>
            <div className={c.comment}>
                <p>{comments.comments}</p>
            </div>
        </div>
    );
}
export default Comment;
