//import films from '../../staticStorage/all_films';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './filmpage.css';

import { Link } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
//import userImg from '../../images/user.png';
import axios from 'axios';

class Filmpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films:[],
            film:{},
            comment:[]
        };
        this.loadFilms = this.loadFilms.bind(this);
        
    }
    
    componentDidMount() {
        this.loadFilms();
    }
    
    async loadFilms()
    {
        const promise = await axios.get('http://localhost:3001/catalog');
        const status = promise.status;
        if(status===200)
        {
            const data = promise.data;
            this.setState({films:data});
            this.setState({film:data.find((film) => film.id === this.props.match.params.id)});
            this.setState({comment:this.state.film.comment});
            //console.log(this.state);
        }
    }
    addComment() {
        let container = document.getElementsByClassName('container')[0];
        const com = document.getElementById('addComment').value;
        let div = document.createElement('div');
        div.className = 'commentcont';
        let work = {
            nickname: 'userAdder',
            avatar: 'user.png',
            comment: com,
        };

        if (com.trim().length > 0) {
            container.prepend(div);
            let a = Comment({ work });
            ReactDOM.render(a, div);
            
        }
    }
    render() {
        //        const id = this.props.match.params.id;
        //        console.log(id);
        //        console.log(this.state.films);
        //        const film = this.state.films.find((film) => film.id === id);
        return (
            <div className="FilmContain">
                <div className="Filmpage">
                    <h1>{this.state.film.title}</h1>
                    <img
                        src={'http://localhost:3001/images/'+this.state.film.screenshot}
                        alt="titleImg"
                        className="titleImg"
                    ></img>
                    <div className="buttonsMenu">
                        <button type="submit">Купити: {this.state.film.price}$</button>
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
                            <div className="rate">{this.state.film.rate}</div>
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
                        <div className="desc">{this.state.film.description}</div>
                    </div>

                    <div className="filmComment">
                        <p className="commentP">Коментарі:</p>
                        <div className="commentSection">
                            <textarea id="addComment"></textarea>
                            <button
                                type="submit"
                                id="addCommentBtn"
                                onClick={this.addComment}
                            >
                                Додати коментар
                            </button>
                        </div>
                        <div className="container">
                            {this.state.comment.map((commentar) => (
                                <div className="commentcont" key={commentar.id}>
                                    <Comment
                                        key={commentar.id}
                                        work={commentar}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filmpage;
