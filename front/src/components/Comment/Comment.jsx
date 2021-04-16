import c from './Comment.module.css';

function Comment({ work }) {
    //console.log(work);
    return (
        <div className={c['comment-block']}>
            <div className={c.avatar}>
                <img
                    className={c['avatar_img']}
<<<<<<< HEAD
                    src={'http://localhost:3001/images/' + work.avatar}
=======
                    src={'http://localhost:3001/images/'+work.avatar}
>>>>>>> 09dddb88f114a8fb45f2fbf1f7ebc219b1e0d5d4
                    alt={work.nickname}
                />
            </div>
            <div className={c.author}>
                <p>{work.nickname}</p>
            </div>
            <div className={c.comment}>
                <p>{work.comment}</p>
            </div>
        </div>
    );
}
export default Comment;
