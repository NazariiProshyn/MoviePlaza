import c from './Comment.module.css';
import { useState, useEffect } from 'react';
import { setUsersComments } from '../../dataService/comment';

import { getImage } from '../../dataService/getimage';

function Comment({ comments }) {
    const HOSTNAME = 'https://movieplaza.herokuapp.com';
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
                    src={getImage(HOSTNAME, user.userimage)}
                    alt={comments.userid}
                />
            </div>
            <div className={c['comment-content']}>
                <div className={c.author}>
                    <span className={c.login}>{user.login}</span>
                    <span className={c.date}>
                        {comments.commentdate === ''
                            ? new Date()
                                  .toLocaleDateString()
                                  .split('.')
                                  .join('-') +
                              ' ' +
                              new Date().toLocaleTimeString('ua-UA')
                            : comments.commentdate
                                  .split('T')
                                  .join(' ')
                                  .split('.')[0]}
                    </span>
                </div>
                <div className={c.comment}>
                    <div className={c['comment-text']}>{comments.comments}</div>
                </div>
            </div>
        </div>
    );
}
export default Comment;
