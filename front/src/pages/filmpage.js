import films from '../staticStorage/allfilm';

import React, { Component } from 'react';
import './filmpage.css';
import { Link } from 'react-router-dom';

class Filmpage extends Component {
    render() {
        const id = this.props.match.params.id;
        const film = films.find((film) => film.id === id);
        return (
            <div className="FilmContain">
                <div className="Filmpage">
                    <h1>{film.title}</h1>
                    <img
                        src={film.screenshot}
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
                            <b>Рік випуску:</b> 2017
                        </div>
                        <div>
                            <b>Жанри:</b> Трагедія, Комедія, Абсурд
                        </div>
                        <div>
                            <b>Довжина:</b> 120 хв
                        </div>
                        <div className="filmRate">
                            <p>Оцінка фільма: </p>
                            <div className="star"></div>
                            <div className="rate">{film.rate}</div>
                        </div>
                        <div className="yourRate">
                            <p>Ваша оцінка: </p>
                            <div className="rating-area">
                                <input
                                    type="radio"
                                    id="star-5"
                                    name="rating"
                                    value="5"
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
                                />
                                <label
                                    htmlFor="star-1"
                                    title="Оцінка «1»"
                                ></label>
                            </div>
                        </div>
                        <p>Описання:</p>
                        <div className="desc">{film.description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filmpage;
