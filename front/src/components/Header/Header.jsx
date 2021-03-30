import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import h from './Header.module.css';

import user from './../../images/user.png';
import logo from './../../images/Logo.png';
import search_img from './../../images/search.png';

class Header extends Component {
    render() {
        return (
            <ul className={h.header}>
                <li>
                    <Link to="/" className={h.nav_link}>
                        <img src={logo} alt="logo" id={h.logo_img}/>
                        MoviePlaza
                    </Link>
                </li>
                <li>
                    <Link to="/catalog" className={h.nav_link}>
                        Фільми
                    </Link>
                </li>
                <li>
                    <Link to="/room" className={h.nav_link}>
                        Створити кімнату
                    </Link>
                </li>
                <li>
                    <input id={h.film_search} type="search" placeholder="Пошук фільму"></input>
                    {/*добавити onclick для img або замінити img на button i знайти спосіб як поставити на фон кнопки картинку */}
                    <img src={search_img} alt="search" id={h.search_img} onClick={this.test}/>
                </li>
                <li>
                    <Link to="/balancerefill" className={h.nav_link}>
                        Поточний рахунок:
                    </Link>
                    <div id={h.balance}>0 грн</div>
                </li>
                <li>
                    <Link to="/user">
                        <img src={user} alt="user" id={h.user_img}/>
                        {/* Якщо виконано вхід на аккаунт то замість цього тексту буде нік користувача*/}
                        <div id={h.enter}>Увійти/зареєструватися</div>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default Header;
