import React, { useState } from 'react';
import f from './Filter.module.css';
import { search } from '../../dataService/search';
import search_img from './../../images/search.png';

const Filter = (catalogData) => {
    const [searchValue, setSearchValue] = useState('');
    const [genre, setGenre] = useState('');
    const [startyear, setStartyear] = useState('');
    const [endyear, setEndYear] = useState('');
    const [startlength, setStartlength] = useState('');
    const [endlength, setEndLength] = useState('');
    const [startprice, setStartprice] = useState('');
    const [endprice, setEndPrice] = useState('');
    const [startrate, setStartrate] = useState('');
    const [endrate, setEndrate] = useState('');

    const callSearchFunction = () => {
        search(
            catalogData.setfilms,
            searchValue,
            genre,
            startyear,
            endyear,
            startlength,
            endlength,
            startprice,
            endprice,
            startrate,
            endrate
        );
    };
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    };
    const clearFilter = () => {
        setGenre('Жанр');
        setStartyear('');
        setEndYear('');
        setStartlength('');
        setEndLength('');
        setStartprice('');
        setEndPrice('');
        setStartrate('');
        setEndrate('');
        search(
            catalogData.setfilms,
            '',
            'Жанр',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        );
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
                <select
                    id="filter-genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="Жанр">Жанр</option>
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
                        onChange={(e) => setStartyear(e.target.value)}
                        id="start-year"
                        placeholder="від"
                        data-filter="year_from"
                        value={startyear}
                    ></input>
                    <input
                        onChange={(e) => setEndYear(e.target.value)}
                        id="end-year"
                        placeholder="до"
                        data-filter="year_to"
                        value={endyear}
                    ></input>
                </div>
                <div className={f['filter-length']}>
                    <p>Довжина:</p>
                    <input
                        onChange={(e) => setStartlength(e.target.value)}
                        id="start-length"
                        placeholder="від"
                        data-filter="length_from"
                        value={startlength}
                    ></input>
                    <input
                        onChange={(e) => setEndLength(e.target.value)}
                        id="end-length"
                        placeholder="до"
                        data-filter="length_to"
                        value={endlength}
                    ></input>
                </div>
                <div className={f['filter-price']}>
                    <p>Ціна:</p>
                    <input
                        onChange={(e) => setStartprice(e.target.value)}
                        id="start-price"
                        placeholder="від"
                        data-filter="price_from"
                        value={startprice}
                    ></input>
                    <input
                        onChange={(e) => setEndPrice(e.target.value)}
                        id="end-price"
                        placeholder="до"
                        data-filter="price_to"
                        value={endprice}
                    ></input>
                </div>
                <div className={f['filter-rate']}>
                    <p>Рейтинг</p>
                    <input
                        onChange={(e) => setStartrate(e.target.value)}
                        id="start-rate"
                        placeholder="від"
                        data-filter="rate_from"
                        value={startrate}
                    ></input>
                    <input
                        onChange={(e) => setEndrate(e.target.value)}
                        id="end-rate"
                        placeholder="до"
                        data-filter="rate_to"
                        value={endrate}
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
