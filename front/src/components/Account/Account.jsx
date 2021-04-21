import a from './Account.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Account(params) {
    const [user, setUser] = useState([]);
    useEffect(() => {axios
        .get(
            'http://localhost:3001/users/'+params.user
        )
        .then(res => res.data).then(res => { setUser(res);
        });
    }, [params.user]);
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
                        <span>Про себе:</span>
                        <textarea
                            className={a['user-about']}
                            readOnly={true}
                            //value={params.user.about}
                        ></textarea>
                    </div>

                    <div className={a['user-favourites']}>
                        <span>Уподобання:</span>
                        <ul>
                            <li>
                                Улюблений жанр: {/*params.user.favourites.genre*/}
                            </li>
                            <li>
                                Улюблений режисер:{' '}
                                {/*params.user.favourites.producer*/}
                            </li>
                            <li>
                                Улюблений актер: {/*params.user.favourites.actor*/}
                            </li>
                            <li>
                                Улюблений фільм: {/*params.user.favourites.film*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
