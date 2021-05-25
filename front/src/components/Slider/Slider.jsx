//import { Link } from 'react-router-dom';
import s from './Slider.module.css';

import slide from './../../images/slider.jpg';

const Slider = () => {
    return (
        <div className={s['slider-wrapper']}>
            <div className={s.slider}>
                <div className={s['image-wrapper']}>
                    {/*<Link to="/catalog/filmname">*/}
                    <img
                        src={slide}
                        alt="logo"
                        className={s['slider-image']}
                    />
                    {/*</Link>*/}
                    <div className={s['slider-buttons']}>
                        <div id={s['slider-buttons__left']}>&#10094;</div>
                        <div id={s['slider-buttons__right']}>&#10095;</div>
                    </div>
                    <div className={s['image-description']}>
                        Рятувальники Малібу
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
