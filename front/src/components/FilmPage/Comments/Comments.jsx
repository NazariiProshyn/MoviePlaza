import { useState, useEffect } from 'react';

import './comments.css';
import Comment from '../../Comment/Comment';
import { addNewComment, setFilmComments } from '../../../dataService/filmpage';

const Comments = (params) => {
    const isLogin = params.data.isLogin;
    const userId = params.data.userId;

    const [comments, setComments] = useState([]);

    useEffect(() => {
        setFilmComments(setComments);
    }, []);

    const addComment = () => {
        const comment = document.getElementById('addComment').value;

        // Функція яка додає новий коментар до фільму та зберігає його на сервері
        addNewComment(comment, userId);
        setComments((oldcomment) => [
            { comments: comment, userid: userId, commentdate: '' },
            ...oldcomment,
        ]);
        document.getElementById('addComment').value = '';
    };

    return (
        <div className="filmComment">
            <p className="commentP">Коментарі:</p>
            {isLogin ? (
                <div className="commentSection" id={isLogin}>
                    <textarea id="addComment"></textarea>
                    <button
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
            <div className="container">
                {comments.map((comment) => (
                    <div
                        className="commentcont"
                        key={comment.userid + comment.comments}
                    >
                        <Comment key={comment.userid} work={comment} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
