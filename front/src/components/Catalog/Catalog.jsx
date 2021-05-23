import Filter from '../Filter/Filter';
import Films from '../Films/Films';
import c from './Catalog.module.css';
import React, { useEffect, useState } from 'react';
import { getfilms } from './../../dataService/search';

const Catalog = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getfilms(setFilms);
    }, []);

    return (
        <div className="Catalog">
            <div className="container">
                <Filter setfilms={setFilms} />
                <div className={c['films-container']}>
                    {films.map((film) => (
                        <Films key={film.id} work={film} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
