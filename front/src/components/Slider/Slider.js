import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slide from './../../images/slider.jpg';

import './Slider.css';

class Slider extends Component {
    render() {
        return (
            <div className="sliderbox">
                <div className="slider">
                    <div id="img-container" className="images-container">
                        <Link to="/catalog/filmname">
                            <img
                                src={slide}
                                alt="logo"
                                className="slider-item"
                            ></img>
                        </Link>
                        <div className="buttons-block">
                            <div id="prev-btn">&lt;--</div>
                            <div id="next-btn">--&gt;</div>
                        </div>
                    </div>
                </div>
                <div className="popular">Популярні нові фільми</div>
            </div>
        );
    }
}

export default Slider;
