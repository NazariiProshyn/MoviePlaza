import '../../../pages/filmpage/filmpage.css';
import Comment from '../../Comment/Comment';

const Comments = (params) => {
    const isLogin = params.data.isLogin;
    const addComment = params.data.addComment;
    const comments = params.data.comments;

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
                        <Comment
                            key={comment.userid}
                            work={comment}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;