import fp from './filmpage.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getImage } from '../../dataService/getimage';
import { setRate, getUserRate } from '../../dataService/filmpage';

const FilmPage = (filmpage_data) => {
    const [userRate, setUserRate] = useState('');

    const film = filmpage_data.data;
    const isLogin = filmpage_data.login_data.isLogin;

    const HOSTNAME = 'https://movieplaza.herokuapp.com';

    const HandleRate = (event) => {
        setUserRate(event.target.value);
        setRate(event.target.value, isLogin.userId);
    };

    useEffect(() => {
        if (isLogin) {
            getUserRate(setUserRate);
            if (userRate) {
                document.getElementById('star-' + userRate).checked = true;
            }
        }
    }, [isLogin, userRate]);

    return (
        <div className="Filmpage">
            <div className="container">
                <div className={fp['film-wrapper']}>
                    <div className={fp['film-wrapper-present']}>
                        <img
                            src={getImage(HOSTNAME, film.filmimage)}
                            alt="titleImg"
                            className={fp['film-image']}
                        ></img>
                        {isLogin ? (
                            <div className={fp['your-rating']}>
                                <div className={fp['rating-area']}>
                                    <input
                                        type="radio"
                                        id="star-5"
                                        name="rating"
                                        value="5"
                                        onClick={HandleRate}
                                    />
                                    <label
                                        htmlFor="star-5"
                                        title="Оцінка «5»"
                                    ></label>
                                    <input
                                        type="radio"
                                        id="star-4"
                                        name="rating"
                                        value="4"
                                        onClick={HandleRate}
                                    />
                                    <label
                                        htmlFor="star-4"
                                        title="Оцінка «4»"
                                    ></label>
                                    <input
                                        type="radio"
                                        id="star-3"
                                        name="rating"
                                        value="3"
                                        onClick={HandleRate}
                                    />
                                    <label
                                        htmlFor="star-3"
                                        title="Оцінка «3»"
                                    ></label>
                                    <input
                                        type="radio"
                                        id="star-2"
                                        name="rating"
                                        value="2"
                                        onClick={HandleRate}
                                    />
                                    <label
                                        htmlFor="star-2"
                                        title="Оцінка «2»"
                                    ></label>
                                    <input
                                        type="radio"
                                        id="star-1"
                                        name="rating"
                                        value="1"
                                        onClick={HandleRate}
                                    />
                                    <label
                                        htmlFor="star-1"
                                        title="Оцінка «1»"
                                    ></label>
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className={fp['film-wrapper-content']}>
                        <div className={fp['content-block']}>
                            <span className={fp['film-heading']}>
                                {film.filmname}
                            </span>
                            <div className={fp['film-description']}>
                                <div className={fp['film-description__date']}>
                                    <span>Рік випуску: </span>
                                    <span className={fp['attention-blue']}>
                                        {film.dateofrelease}
                                    </span>
                                </div>
                                <div className={fp['film-description__genre']}>
                                    <span>Жанри: </span>
                                    <span className={fp['attention-blue']}>
                                        {film.genres.join(', ')}
                                    </span>
                                </div>
                                <div
                                    className={fp['film-description__duration']}
                                >
                                    <span>Довжина: </span>
                                    <span className={fp['attention-blue']}>
                                        {film.duration} <span> хв</span>
                                    </span>
                                </div>
                                <div className={fp['film-description__rating']}>
                                    <span>Оцінка фільма: </span>
                                    <span className={fp['rating-points']}>
                                        <span
                                            className={fp['attention-blue']}
                                            id="filmRate"
                                        >
                                            {film.rate}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={fp['film-buttons']}>
                            <button
                                className={fp['film-buttons__item']}
                                type="submit"
                            >
                                Купити: {film.price}$
                            </button>
                            <Link to="/room" className={fp['watchroom-link']}>
                                <span>Дивитися зараз</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={fp['description-wrapper']}>
                    <span className={fp['description-wrapper__heading']}>
                        Опис:
                    </span>
                    <div className={fp['film-full-description']}>
                        {film.informationaboutfilm}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmPage;
