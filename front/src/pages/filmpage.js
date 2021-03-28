import films from '../staticStorage/allfilm';
import star from './../images/star.png';
import React, { Component } from 'react';

class Filmpage extends Component {
    render() {
        const id = this.props.match.params.id;
        const film = films.find((film) => film.id === id);
        return (
            <div className="Filmpage">
                <h1>{film.title}</h1>
                <div>Рік випуску: 2017</div>
                <div>Жанри: Трагедія, Комедія, Абсурд</div>
                <div>Довжина: 120 хв</div>
                <div>
                    <img src={star} alt="star" className="star"></img>{' '}
                    <div>:{film.rate}</div>
                </div>
            </div>
        );
    }
}

export default Filmpage;
