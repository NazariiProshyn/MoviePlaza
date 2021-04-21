import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import './filmpage.css';
import { Link } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
import axios from 'axios';

const Filmpage = ()=> {
    const [film, setFilm] = useState({comments:[], genres:[]});

    
    useEffect(()=>{
        axios
            .get(
                'http://localhost:3001'+window.location.pathname
            )
            .then(res => res.data).then(res => setFilm(res));
    }, []
    );
    
    const addComment = () => {
        let container = document.getElementsByClassName('container')[0];
        const com = document.getElementById('addComment').value;
        let div = document.createElement('div');
        div.className = 'commentcont';
        let work = {
            userid: 'userAdder',
            avatar: 'user.png',
            comments: com,
        };

        if (com.trim().length > 0) {
            container.prepend(div);
            let a = Comment({ work });
            ReactDOM.render(a, div);
            
        }
    };
    
    return (
        <div className="FilmContain">
            <div className="Filmpage">
                <h1>{film.filmname}</h1>
                <img
                    src={
                        'http://localhost:3001/images/' +
                            film.filmimage
                    }
                    alt="titleImg"
                    className="titleImg"
                ></img>
                <div className="buttonsMenu">
                    <button type="submit">
                            Купити: {film.price}$
                    </button>
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
                    <div className="desc">
                        {film.informationaboutfilm}
                    </div>
                </div>

                <div className="filmComment">
                    <p className="commentP">Коментарі:</p>
                    <div className="commentSection">
                        <textarea id="addComment"></textarea>
                        <button
                            type="submit"
                            id="addCommentBtn"
                            onClick={addComment}
                        >
                                Додати коментар
                        </button>
                    </div>
                    <div className="container">
                        {film.comments.map((commentar) => (
                            <div className="commentcont" key={commentar.userid}>
                                <Comment
                                    key={commentar.userid}
                                    work={commentar}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Filmpage;
