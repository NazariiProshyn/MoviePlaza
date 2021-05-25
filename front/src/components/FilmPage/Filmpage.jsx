import './filmpage.css';
import { Link } from 'react-router-dom';

import { getImage } from '../../dataService/getimage';

const FilmPage = (filmpage_data) => {
    const film = filmpage_data.data;
    const isLogin = filmpage_data.login_data;
    const HOSTNAME = 'https://movieplaza.herokuapp.com';

    return (
        <div className="Filmpage">
            <h1>{film.filmname}</h1>
            <img
                src={getImage(HOSTNAME, film.filmimage)}
                alt="titleImg"
                className="titleImg"
            ></img>
            <div className="buttonsMenu">
                <button type="submit">Купити: {film.price}$</button>
                <Link to="/room" className="watchroom disabled">
                    <div className="watch">
                        <p>Дивитися зараз</p>
                    </div>
                </Link>
            </div>

            <div className="filmdesc">
                <div>
                    <b>Рік випуску:</b> {film.dateofrelease}
                </div>
                <div>
                    <b>Жанри:</b> {film.genres.join(', ')}
                </div>
                <div>
                    <b>Довжина:</b> {film.duration} хв
                </div>
                <div className="filmRate">
                    <p>Оцінка фільма: </p>
                    <div className="star"></div>
                    <div className="rate">{film.rate}</div>
                </div>
                {isLogin ? (
                    <div className="yourRate">
                        <p>Ваша оцінка: </p>
                        <div className="rating-area">
                            <input
                                type="radio"
                                id="star-5"
                                name="rating"
                                value="5"
                            />
                            <label htmlFor="star-5" title="Оцінка «5»"></label>
                            <input
                                type="radio"
                                id="star-4"
                                name="rating"
                                value="4"
                            />
                            <label htmlFor="star-4" title="Оцінка «4»"></label>
                            <input
                                type="radio"
                                id="star-3"
                                name="rating"
                                value="3"
                            />
                            <label htmlFor="star-3" title="Оцінка «3»"></label>
                            <input
                                type="radio"
                                id="star-2"
                                name="rating"
                                value="2"
                            />
                            <label htmlFor="star-2" title="Оцінка «2»"></label>
                            <input
                                type="radio"
                                id="star-1"
                                name="rating"
                                value="1"
                            />
                            <label htmlFor="star-1" title="Оцінка «1»"></label>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <p>Опис:</p>
                <div className="desc">{film.informationaboutfilm}</div>
            </div>
        </div>
    );
};

export default FilmPage;
