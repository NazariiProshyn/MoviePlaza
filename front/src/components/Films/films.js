import React from 'react';
import './Films.css';

function Films({ work }) {
    return (
        <a href={work.link} className="film-item">
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
                <p>{work.description}</p>
            </div>
        </a>
    );
}
export default Films;
