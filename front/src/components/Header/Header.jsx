import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import h from './Header.module.css';
import { setLogin, Logout } from '../../dataService/header';

const { v4: uuidV4 } = require('uuid');

const Header = () => {
    const [isLogin, setIsLogin] = useState('');

    // Перевіряємо чи зайшов користувач у систему
    useEffect(() => {
        setLogin(setIsLogin);
    }, []);

    // Функція для виходу із системи
    const logout = () => {
        Logout();
        window.location.reload();
    };

    return (
        <header className={h.header}>
            <div className="container">
                <div className={h['header-wrapper']}>
                    <div className={h.navbar}>
                        <Link to="/" className={h['header-logo']}>
                            <div className={h['header-brand']}></div>
                        </Link>
                        <Link to="/catalog" className={h['header-link']}>
                            <span>Фільми</span>
                        </Link>
                        <Link
                            to={'/room/' + uuidV4()}
                            className={h['header-link']}
                        >
                            <span>Створити кімнату</span>
                        </Link>
                    </div>
                    {isLogin ? (
                        <div className={h['user-bar']}>
                            <a
                                className={h['header-link']}
                                href={'/profile/' + isLogin}
                            >
                                {isLogin}
                            </a>
                            <div className={h['header-link']} onClick={logout}>
                                logout
                            </div>
                        </div>
                    ) : (
                        <div className={h['user-bar']}>
                            <Link to="/login" className={h['header-link']}>
                                <div id={h.enter}>Увійти</div>
                            </Link>
                            <Link
                                to="/registration"
                                className={h['header-link']}
                            >
                                <div id={h.register}>Зареєструватися</div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
