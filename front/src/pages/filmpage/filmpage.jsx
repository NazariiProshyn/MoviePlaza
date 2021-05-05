import './filmpage.css';

import { useState, useEffect } from 'react';
import FilmPage from '../../components/FilmPage/Filmpage';
import Comments from '../../components/FilmPage/Comments/Comments';

import {
    getLogin,
    setFilmPage,
    addNewComment,
} from '../../dataService/filmpage';

const Filmpage = () => {
    // Зберігаємо інформацію про фільм, коментарі до фільму та користувача
    const [film, setFilm] = useState({ genres: [] });
    const [isLogin, setIsLogin] = useState('');
    const [userId, setUserId] = useState('');
    const [comments, setComments] = useState([]);

    // При завантаженні сторінки фільму перевіряємо чи користувач увійшов в систему та заповнюємо сторінку потрібною інформацією
    useEffect(() => {
        setFilmPage(setFilm, setComments);
        getLogin(setIsLogin, setUserId);
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

    const comments_info = {
        isLogin: isLogin,
        addComment: addComment,
        comments: comments,
    };

    return (
        <div className="FilmContain">
            <FilmPage data={film} />
            <Comments data={comments_info} />
        </div>
    );
};

export default Filmpage;
