import React from 'react';
import './Films.css';
import { Link } from 'react-router-dom';

function Films({ work }) {
    return (
        <Link to={`/catalog/${work.id}`} className="film-item" id={work.id}>
            <div className="film-img-div">
                <img
                    className="film-item-img"
                    src={work.screenshot}
                    alt={work.title}
                />
            </div>
            <div className="film-title">
                <p>{work.title}</p>
            </div>
            <div className="film-desc">
                <p className="catalog_rate">Рейтинг фільму:{work.rate}</p>
                <p>{work.description}</p>
            </div>
        </Link>
    );
}
export default Films;
