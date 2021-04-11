import Filter from '../Filter/Filter';
import Films from '../Films/Films';
import c from './Catalog.module.css';
import React, { Component } from 'react';
import axios from 'axios';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
        };
        this.loadFilms = this.loadFilms.bind(this);
    }

    componentDidMount() {
        this.loadFilms();
    }

    async loadFilms() {
        const promise = await axios.get('http://localhost:3001/catalog');
        const status = promise.status;
        if (status === 200) {
            const data = promise.data;
            this.setState({ films: data });
        }
    }

    render() {
        return (
            <div className="Catalog">
                <Filter />
                <div className={c.container}>
                    {this.state.films.map((film) => (
                        <Films key={film.id} work={film} />
                    ))}
                </div>
            </div>
        );
    }
}
export default Catalog;
