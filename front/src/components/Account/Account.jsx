import a from './Account.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Account(params) {
    const [user, setUser] = useState({bdate:''});
    const [isLogin, setData] = useState([]);
    const [nameValue, setnameValue] = useState('');
    const [surnameValue, setsurnameValue] = useState('');
    const [bdate, setBdate] = useState('');
    const [genre, setGenre] = useState('');
    const handleNameInputChanges = (e) => {
        setnameValue(e.target.value);
    };
    const handleSurnameInputChanges = (e) =>{
        setsurnameValue(e.target.value);
    };
    const handleBdateChanges = (e) =>{
        setBdate(e.target.value);
    };
    const handleGenreChanges = (e) =>{
        setGenre(e.target.value);
    };
    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:3001/', {
            withCredentials: true,
        }).then(res => res.data).then(res => { setData(res.name);
        });
            
        console.log(isLogin);

        axios
            .get(
                'http://localhost:3001/users/'+params.user
            )
            .then(res => res.data).then(res => { setUser(res);
            });

    }, [params.user, isLogin]);

    return (
        <div className={a.Account}>
            <div className={a.profile}>
                <div className={a['profile-main']}>
                    <div className={a['profile-avatar']}>
                        <img
                            className={a['profile-avatar__img']}
                            src={'http://localhost:3001/images/'+user.userimage}
                            alt="avatar"
                        />
                    </div>
                    <div className={a['profile-name']}>
                        <span className={a.username}>
                            {params.user}
                        </span>
                    </div>
                </div>

                <div className={a['profile-description']}>
                    <div className={a['user-description']}>
                        <span>Про себе:</span><ul>
                            <li>
                                {isLogin===params.user? <label>Імя: <input onChange={handleNameInputChanges} id ='name' defaultValue ='' value={nameValue||user.firstname}></input></label>:'Імя: '+ user.firstname}
                            </li>
                            <li>
                                {isLogin===params.user? <label>Прізвище: <input onChange={handleSurnameInputChanges} id ='surname' defaultValue ='' value={surnameValue||user.secondname}></input></label>:'Прізвище: '+ user.secondname}
                            </li>
                            <li>
                                {isLogin===params.user? <label>День народження: <input type='date' id ='bdate' value={bdate||user.bdate.split('T')[0]} defaultValue ='' min='1900-01-01' onChange={handleBdateChanges}></input></label>:'День народження: '+ user.bdate.split('T')[0]}
                            </li>
                        </ul>
                        {/*<textarea
                            className={a['user-about']}
                            readOnly={true} handleGenreChanges 
                            //value={params.user.about}
                        ></textarea>*/}
                    </div>

                    <div className={a['user-favourites']}>
                        <span>Уподобання:</span>
                        <ul>
                            <li>
                                {isLogin===params.user? <label>Улюблений жанр: <select id='filter-genre' value={genre||user.favourite_genre} onChange={handleGenreChanges}>
                                    <option>Жанр</option>
                                    <option value="Комедия">Комедія</option>
                                    <option value="Фэнтези">Фентезі</option>
                                    <option value="Боевик">Бойовик</option>
                                    <option value="Детектив">Детектив</option>
                                    <option value="Ужасы">Жахи</option>
                                    <option value="Триллер">Триллер</option>
                                    <option value="Драма">Драма</option>
                                </select></label>:'Улюблений жанр: '+ user.favourite_genre}
                            </li>
                            {/*
                            <li>
                                Улюблений режисер:{' '}
                                params.user.favourites.producer
                            </li>
                            <li>
                                Улюблений актер: params.user.favourites.actor
                            </li>
                            <li>
                                Улюблений фільм: params.user.favourites.film
                            </li>
                            */}
                        </ul>
                    </div>
                    <div className={a['changebtn']}>
                        {isLogin===params.user?<button>Редагувати профіль</button>:''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
