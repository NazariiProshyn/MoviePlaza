import React, { useState } from 'react';
import search_img from './../../images/search.png';
import w from './../Watchroom/Watchroom.module.css';
import { search } from './../../dataService/search';
// Компонта для пошуку фільма в кімнаті перегляду
const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    };

    const callSearchFunction = (e) => {
        e.preventDefault();
        search(props.setfilms, searchValue);
    };

    return (
        <div className={w['search-block']}>
            <input
                value={searchValue}
                id={w['search-block__input']}
                type="search"
                placeholder="Пошук фільму"
                onChange={handleSearchInputChanges}
            ></input>
            <img
                src={search_img}
                alt="search"
                id={w['search-img']}
                onClick={callSearchFunction}
            ></img>
        </div>
    );
};

export default Search;
