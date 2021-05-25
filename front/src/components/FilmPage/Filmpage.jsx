import './filmpage.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getImage } from '../../dataService/getimage';
import { setRate, userRate } from '../../dataService/filmpage';

const FilmPage = (filmpage_data) => {
    const [userRates, setUserRate] = useState('');
    const [filmrate, setFilmRate] = useState();
    const film = filmpage_data.data;
    const isLogin = filmpage_data.login_data;
    const HOSTNAME = 'https://movieplaza.herokuapp.com';
    const HandleRate = (event)=>{
        setUserRate(event.target.value);
        setRate(event.target.value, isLogin.userId);
        setFilmRate(((Number(filmpage_data.data.rate)*(Number(filmpage_data.data.numofvoices))+Number(event.target.value))/((Number(filmpage_data.data.numofvoices)+1))).toFixed(2));
    };
    useEffect(() => {
        userRate(setUserRate);
        setFilmRate(filmpage_data.data.rate);
    },[filmpage_data.data.rate]);

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
                    <div className="rate">{filmrate||filmpage_data.data.rate}</div>
                </div>
                {isLogin.userId ? (
                    <div>
                    <div className="yourRate">
                        <p>Ваша оцінка: </p>
                        <div className="rating-area">
                            <input
                                type="radio"
                                id="star-5"
                                name="rating"
                                value="5"
                                onClick={HandleRate}
                                
                            />
                            <label htmlFor="star-5" title="Оцінка «5»"></label>
                            <input
                                type="radio"
                                id="star-4"
                                name="rating"
                                value="4"
                                onClick={HandleRate}
                               
                            />
                            <label htmlFor="star-4" title="Оцінка «4»"></label>
                            <input
                                type="radio"
                                id="star-3"
                                name="rating"
                                value="3"
                                onClick={HandleRate}
                              
                            />
                            <label htmlFor="star-3" title="Оцінка «3»"></label>
                            <input
                                type="radio"
                                id="star-2"
                                name="rating"
                                value="2"
                                onClick={HandleRate}
                               
                            />
                            <label htmlFor="star-2" title="Оцінка «2»"></label>
                            <input
                                type="radio"
                                id="star-1"
                                name="rating"
                                value="1"
                                onClick={HandleRate}
                                
                            />
                            <label htmlFor="star-1" title="Оцінка «1»"></label>
                        </div>
                    </div>
                    <div className='userrate'>
                        <b>Поточна оцінка</b>{userRates}
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
