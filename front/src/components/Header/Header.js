import React, { Component } from 'react';
import './Header.css';
import user from './../../images/user.png';
import logo from './../../images/Logo.png';
import searchimg from './../../images/searc.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    test() {
        console.log('+');
    }
    render() {
        return (
            <ul className="header">
                <li>
                    <Link to="/" className="navlink">
                        <img src={logo} alt="logo" id="logoImg"></img>
                        MoviePlaza
                    </Link>
                </li>
                <li>
                    <Link to="/catalog" className="navlink">
                        Фільми
                    </Link>
                </li>
                <li>
                    <Link to="/room" className="navlink">
                        Створити кімнату
                    </Link>
                </li>
                <li>
                    <input
                        id="filmsearch"
                        type="search"
                        placeholder="Пошук фільму"
                    ></input>
                    {/*добавити onclick для img або замінити img на button i знайти спосіб як поставити на фон кнопки картинку */}
                    <img
                        src={searchimg}
                        alt="search"
                        id="searchImg"
                        onClick={this.test}
                    ></img>
                </li>
                <li>
                    <Link to="/balancerefill" className="navlink">
                        Поточний рахунок:
                    </Link>
                    <div id="balance">0 грн</div>
                </li>
                <li>
                    <Link to="/user">
                        <img src={user} alt="user" id="userImg"></img>
                        {/* Якщо виконано вхід на аккаунт то замість цього тексту буде нік користувача*/}
                        <div id="enter">Увійти/зареєструватися</div>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default Header;
