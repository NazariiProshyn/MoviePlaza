import React, { useState } from 'react';
import f from './Filter.module.css';

import search_img from './../../images/search.png';

const Filter = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const callSearchFunction = () => {
        props.search(
            searchValue,
            document.getElementById('filter-genre').value,
            document.getElementById('start-year').value,
            document.getElementById('end-year').value,
            document.getElementById('start-length').value,
            document.getElementById('end-length').value,
            document.getElementById('start-price').value,
            document.getElementById('end-price').value,
            document.getElementById('start-rate').value,
            document.getElementById('end-rate').value
        );
    };
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    };
    const clearFilter = () => {
        document.getElementById('filter-genre').selectedIndex = 0;
        document.getElementById('start-year').value = '';
        document.getElementById('end-year').value = '';
        document.getElementById('start-length').value = '';
        document.getElementById('end-length').value = '';
        document.getElementById('start-price').value = '';
        document.getElementById('end-price').value = '';
        document.getElementById('start-rate').value = '';
        document.getElementById('end-rate').value = '';
        callSearchFunction();
    };
    return (
        <div className={f.container}>
            <p>Каталог фільмів</p>
            <div className={f['search-block']}>
                <input
                    id={f['search-block__input']}
                    type="search"
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    placeholder="Пошук фільму"
                ></input>
                <img
                    src={search_img}
                    alt="search"
                    id={f['search-img']}
                    onClick={callSearchFunction}
                ></img>
            </div>
            <p>Фільтр:</p>
            <div className={f.filter}>
                <select id="filter-genre">
                    <option>Жанр</option>
                    <option value="Комедия">Комедія</option>
                    <option value="Фэнтези">Фентезі</option>
                    <option value="Боевик">Бойовик</option>
                    <option value="Детектив">Детектив</option>
                    <option value="Ужасы">Жахи</option>
                    <option value="Триллер">Триллер</option>
                    <option value="Драма">Драма</option>
                </select>
                <div className={f['filter-year']}>
                    <p>Рік:</p>
                    <input
                        id="start-year"
                        placeholder="від"
                        data-filter="year_from"
                    ></input>
                    <input
                        id="end-year"
                        placeholder="до"
                        data-filter="year_to"
                    ></input>
                </div>
                <div className={f['filter-length']}>
                    <p>Довжина:</p>
                    <input
                        id="start-length"
                        placeholder="від"
                        data-filter="length_from"
                    ></input>
                    <input
                        id="end-length"
                        placeholder="до"
                        data-filter="length_to"
                    ></input>
                </div>
                <div className={f['filter-price']}>
                    <p>Ціна:</p>
                    <input
                        id="start-price"
                        placeholder="від"
                        data-filter="price_from"
                    ></input>
                    <input
                        id="end-price"
                        placeholder="до"
                        data-filter="price_to"
                    ></input>
                </div>
                <div className={f['filter-rate']}>
                    <p>Рейтинг</p>
                    <input
                        id="start-rate"
                        placeholder="від"
                        data-filter="rate_from"
                    ></input>
                    <input
                        id="end-rate"
                        placeholder="до"
                        data-filter="rate_to"
                    ></input>
                </div>
                <button
                    className={f['filter-button']}
                    onClick={callSearchFunction}
                >
                    Застосувати
                </button>
                <button className={f['filter-button']} onClick={clearFilter}>
                    Очистити
                </button>
            </div>
        </div>
    );
};

export default Filter;
