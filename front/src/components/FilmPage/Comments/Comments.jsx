import { useState, useEffect } from 'react';

import c from './comments.module.css';
import Comment from '../../Comment/Comment';
import { addNewComment, setFilmComments } from '../../../dataService/filmpage';

const Comments = (filmpage_data) => {
    const isLogin = filmpage_data.data.isLogin;
    const userId = filmpage_data.data.userId;

    const [comments, setComments] = useState([]);

    useEffect(() => {
        setFilmComments(setComments);
    }, []);

    const addComment = () => {
        const comment = document.getElementById('addComment').value;
        if (comment !== '') {
            // Функція яка додає новий коментар до фільму та зберігає його на сервері
            addNewComment(comment, userId);
            setComments((oldcomment) => [
                { comments: comment, userid: userId, commentdate: '' },
                ...oldcomment,
            ]);
            document.getElementById('addComment').value = '';
        } else {
            alert('Comment should not be empty!');
        }
    };

    return (
        <div className={c['film-comments']}>
            <div className="container">
                <div className={c['comments-wrapper']}>
                    <p className={c['comments-heading']}>Коментарі:</p>
                    {isLogin ? (
                        <div className={c['add-comment-section']} id={isLogin}>
                            <input
                                className={c['add-comment']}
                                id="addComment"
                                placeholder="Текст коментаря..."
                            ></input>
                            <button
                                className={c['add-comment__btn']}
                                type="submit"
                                id="addCommentBtn"
                                onClick={addComment}
                            >
                                Додати коментар
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className={c['comment-container']}>
                        {comments.map((comment) => (
                            <div
                                className={c['comment-content']}
                                key={
                                    comment.userid +
                                    comment.comments +
                                    comment.commentdate
                                }
                            >
                                <Comment comments={comment} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
