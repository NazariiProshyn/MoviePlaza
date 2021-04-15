import React, { Component } from 'react';
import f from './Filter.module.css';

import search_img from './../../images/search.png';
import films from '../../staticStorage/all_films';

class Filter extends Component {
    filtering() {
        let cards = document.querySelectorAll('[data-item="film"]');

        const start_rate = document.querySelector('[data-filter="rate_from"]')
            .value;
        const end_rate = document.querySelector('[data-filter="rate_to"]')
            .value;

        /*const start_year = document.querySelector('[data-filter="year_from"]').value;
        const end_year = document.querySelector('[data-filter="year_to"]').value;
        
        const start_price = document.querySelector('[data-filter="price_from"]').value;
        const end_price = document.querySelector('[data-filter="price_to"]').value;

        const start_length = document.querySelector('[data-filter="length_from"]').value;
        const end_length = document.querySelector('[data-filter="length_to"]').value;

        if (start_year || end_year) {
            if (temp.release_year < start_year || temp.release_year > end_year) {
                cards[i].style.display = 'none';
            }
        }
        if (start_length || end_length) {
            if (temp.length < start_length || temp.length > end_length) {
                cards[i].style.display = 'none';
            }
        }
        if (start_price || end_price) {
            if (temp.price < start_price || temp.price > end_price) {
                cards[i].style.display = 'none';
            }
        }*/

        for (let i = 0; i < cards.length; i++) {
            let temp = films.find((film) => film.id === cards[i].id);

            if (start_rate || end_rate) {
                if (temp.rate < start_rate || temp.rate > end_rate) {
                    cards[i].style.display = 'none';
                } else {
                    cards[i].style.display = 'grid';
                }
            }
        }
    }
    test(){
        console.log('search');
    }
    render() {
        return (
            <div className={f.container}>
                <p>Каталог фільмів</p>
                <div className={f['search-block']}>
                    <input
                        id={f['search-block__input']}
                        type="search"
                        placeholder="Пошук фільму"
                    ></input>
                    {/*добавити onclick для img або замінити img на button i знайти спосіб як поставити на фон кнопки картинку */}
                    <img
                        src={search_img}
                        alt="search"
                        id={f['search-img']}
                        onClick={this.test}
                    ></img>
                </div>
                <p>Фільтр:</p>
                <div className={f.filter}>
                    <select id={f['filter-genre']}>
                        <option>Жанр</option>
                        <option value="Комедія">Комедія</option>
                        <option value="Триллер">Триллер</option>
                        <option value="Драма">Драма</option>
                    </select>
                    <div className={f['filter-year']}>
                        <p>Рік:</p>
                        <input
                            id={f['start-year']}
                            placeholder="від"
                            data-filter="year_from"
                        ></input>
                        <input
                            id={f['end-year']}
                            placeholder="до"
                            data-filter="year_to"
                        ></input>
                    </div>
                    <div className={f['filter-length']}>
                        <p>Довжина:</p>
                        <input
                            id={f['start-length']}
                            placeholder="від"
                            data-filter="length_from"
                        ></input>
                        <input
                            id={f['end-length']}
                            placeholder="до"
                            data-filter="length_to"
                        ></input>
                    </div>
                    <div className={f['filter-price']}>
                        <p>Ціна:</p>
                        <input
                            id={f['start-price']}
                            placeholder="від"
                            data-filter="price_from"
                        ></input>
                        <input
                            id={f['end-price']}
                            placeholder="до"
                            data-filter="price_to"
                        ></input>
                    </div>
                    <div className={f['filter-rate']}>
                        <p>Рейтинг</p>
                        <input
                            id={f['start-rate']}
                            placeholder="від"
                            data-filter="rate_from"
                        ></input>
                        <input
                            id={f['end-rate']}
                            placeholder="до"
                            data-filter="rate_to"
                        ></input>
                    </div>
                    <button
                        onClick={this.filtering}
                        className={f['filter-button']}
                    >
                        Застосувати
                    </button>
                </div>
            </div>
        );
    }
}

export default Filter;
