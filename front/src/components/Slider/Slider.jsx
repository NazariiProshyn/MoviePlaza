import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import s from './Slider.module.css';

import slide from './../../images/slider.jpg';

class Slider extends Component {
    render() {
        return (
            <div className={s['slider-wrapper']}>
                <div className={s.slider}>
                    <div className={s['slider-images']}>
                        <Link to="/catalog/filmname">
                            <img
                                src={slide}
                                alt="logo"
                                className={s['slider-images__item']}
                            />
                        </Link>
                        <div className={s['slider-buttons']}>
                            <div id={s['slider-buttons__left']}>&lt;</div>
                            <div id={s['slider-buttons__right']}>&gt;</div>
                        </div>
                    </div>
                </div>
                <div className={s.popular}>Популярні нові фільми</div>
            </div>
        );
    }
}

export default Slider;
