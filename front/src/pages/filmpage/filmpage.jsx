import './filmpage.css';

import { useState, useEffect } from 'react';
import FilmPage from '../../components/FilmPage/Filmpage';
import Comments from '../../components/FilmPage/Comments/Comments';

import { getLogin, setFilmPage } from '../../dataService/filmpage';

const Filmpage = () => {
    // Зберігаємо інформацію про фільм, коментарі до фільму та користувача
    const [film, setFilm] = useState({ genres: [] });
    const [isLogin, setIsLogin] = useState('');
    const [userId, setUserId] = useState('');

    // При завантаженні сторінки фільму перевіряємо чи користувач увійшов в систему та заповнюємо сторінку потрібною інформацією
    useEffect(() => {
        setFilmPage(setFilm);
        getLogin(setIsLogin, setUserId);
    }, []);

    const comments_info = {
        isLogin: isLogin,
        userId: userId,
    };

    return (
        <div className="FilmContain">
            <FilmPage data={film} />
            <Comments data={comments_info} />
        </div>
    );
};

export default Filmpage;
