import a from './Account.module.css';
import { useEffect, useState } from 'react';

import {
    getUserData,
    getLogin,
    setProfileInfo,
} from '../../dataService/account';

function Account(username) {
    // Інформація про сторінку користувача
    const [user, setUser] = useState({
        firstname: '',
        secondname: '',
        bdate: '',
        favourgenre: '',
        userimage: 'user.png',
    });
    const [isLogin, setIsLogin] = useState([]);

    // Отримуємо дані про користувача та інформацію про його авторизацію на сайті
    useEffect(() => {
        getUserData(setUser, username);
    }, [username]);

    useEffect(() => {
        getLogin(setIsLogin);
    }, []);

    const [nameValue, setNameValue] = useState('');
    const [surnameValue, setSurnameValue] = useState('');
    const [bdate, setBdate] = useState('');
    const [genre, setGenre] = useState('');

    const handleInputChange = (functionName, e) => {
        functionName(e.target.value);
    };
    const handleSurnameInputChanges = (e) => {
        setSurnameValue(e.target.value);
    };
    const handleBdateChanges = (e) => {
        setBdate(e.target.value);
    };
    const handleGenreChanges = (e) => {
        setGenre(e.target.value);
    };
    const updateProfile = () => {
        setProfileInfo(isLogin);
    };

    return (
        <div className={a.Account}>
            <div className={a.profile}>
                <div className={a['profile-main']}>
                    <div className={a['profile-avatar']}>
                        <img
                            className={a['profile-avatar__img']}
                            src={
                                'http://localhost:3001/images/' + user.userimage
                            }
                            alt="avatar"
                        />
                    </div>
                    <div className={a['profile-name']}>
                        <span className={a.username}>{username.user}</span>
                    </div>
                </div>

                <div className={a['profile-description']}>
                    <div className={a['user-description']}>
                        <span>Про себе:</span>
                        <ul>
                            <li>
                                {isLogin === username.user ? (
                                    <label>
                                        Імя:{' '}
                                        <input
                                            onChange={handleInputChange(
                                                setNameValue
                                            )}
                                            id="name"
                                            value={nameValue || user.firstname}
                                        ></input>
                                    </label>
                                ) : (
                                    'Імя: ' + user.firstname
                                )}
                            </li>
                            <li>
                                {isLogin === username.user ? (
                                    <label>
                                        Прізвище:{' '}
                                        <input
                                            onChange={handleSurnameInputChanges}
                                            id="surname"
                                            value={
                                                surnameValue || user.secondname
                                            }
                                        ></input>
                                    </label>
                                ) : (
                                    'Прізвище: ' + user.secondname
                                )}
                            </li>
                            <li>
                                {isLogin === username.user ? (
                                    <label>
                                        День народження:{' '}
                                        <input
                                            type="date"
                                            id="bdate"
                                            value={
                                                bdate ||
                                                user.bdate.split('T')[0]
                                            }
                                            min="1900-01-01"
                                            onChange={handleBdateChanges}
                                        ></input>
                                    </label>
                                ) : (
                                    'День народження: ' +
                                    user.bdate.split('T')[0]
                                )}
                            </li>
                        </ul>
                    </div>

                    <div className={a['user-favourites']}>
                        <span>Уподобання:</span>
                        <ul>
                            <li>
                                {isLogin === username.user ? (
                                    <label>
                                        Улюблений жанр:{' '}
                                        <select
                                            id="filter-genre"
                                            value={genre || user.favourgenre}
                                            onChange={handleGenreChanges}
                                        >
                                            <option>Жанр</option>
                                            <option value="Комедия">
                                                Комедія
                                            </option>
                                            <option value="Фэнтези">
                                                Фентезі
                                            </option>
                                            <option value="Боевик">
                                                Бойовик
                                            </option>
                                            <option value="Детектив">
                                                Детектив
                                            </option>
                                            <option value="Ужасы">Жахи</option>
                                            <option value="Триллер">
                                                Триллер
                                            </option>
                                            <option value="Драма">Драма</option>
                                        </select>
                                    </label>
                                ) : (
                                    'Улюблений жанр: ' +
                                    (user.favourgenre !== undefined
                                        ? user.favourgenre
                                        : '')
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className={a['changebtn']}>
                        {isLogin === username.user ? (
                            <button onClick={updateProfile}>
                                Редагувати профіль
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
