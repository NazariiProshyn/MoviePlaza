import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { io } from 'socket.io-client';
import Search from './../SearchSystem/Search';
import Films from './..//Films/Films';
import w from './Watchroom.module.css';
import c from '../Catalog/Catalog.module.css';
import { Socket, emitOnSourceChange } from '../../dataService/watchroom';
import { getSource } from '../../dataService/getsource';

const Watchroom = () => {
    // Установлюємо звідки беремо дані
    const ENDPOINT = 'http://localhost:3001';
    const [films, setFilms] = useState([]);
    const [videosource, setSource] = useState('');
    const [currSocket, setSocket] = useState();

    // Функція яка задає джерело відеоданих
    const watchnow = (filmname) => {
        setSource(getSource(ENDPOINT, filmname));
        document.getElementById('videoPlayer').load();
        emitOnSourceChange(currSocket, filmname);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Задаємо змінні
        const video = document.getElementById('videoPlayer');
        const room = window.location.pathname.substr(6);
        let playPromise = undefined;
        let username = '';
        let seeked = false;

        const vars = {
            ENDPOINT: ENDPOINT,
            video: video,
            room: room,
            playPromise: playPromise,
            username: username,
            seeked: seeked,
        };

        // Набір функцій для задання сокета, джерела та створення повідомлення
        const functions = {
            setSocket: setSocket,
            setSource: setSource,
            createMessage: createMessage,
        };

        // Задаємо сокет для користувача
        const { emitOnMessage } = Socket(io, vars, functions);

        // Відправити повідомлення
        document.getElementById('chat-button').onclick = () => {
            const text = document.getElementById('chat-input').value;
            document.getElementById('chat-input').value = '';
            emitOnMessage(text);
        };
    }, [ENDPOINT]);

    return (
        <div className={w['container']}>
            <div className={w.watchroom}>
                <div className={w['watchroom-player']}>
                    <video className={w['video']} id="videoPlayer" controls>
                        <source src={videosource} />
                    </video>
                </div>
                <div className={w['watchroom-chat']}>
                    <div className={w['chat-buttons']}>
                        <CopyToClipboard text={window.location.href}>
                            <button className={w['chat-buttons__copy']}>
                                Копировать путь к комнате
                            </button>
                        </CopyToClipboard>
                    </div>

                    <div
                        className={w['chat-messages']}
                        data-messages="messages-holder"
                    ></div>

                    <div className={w['chat-input']}>
                        <input
                            className={w['chat-input__input']}
                            type="text"
                            placeholder="Введите сообщение"
                            id="chat-input"
                        ></input>
                        <button
                            className={w['chat-input__send']}
                            type="button"
                            id="chat-button"
                        >
                            <span>&#10003;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={w['movie_select']}>
                <Search setfilms={setFilms}></Search>
                <div className="container">
                    <div className={c['films-container']}>
                        {films.map((film) => (
                            <Films
                                key={film.filmname}
                                work={film}
                                iswatchroom={true}
                                watchnow={watchnow}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const createMessage = (username, pict, text) => {
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();

    const message = document.createElement('div');
    message.className = w.message;

    const message_avatar = document.createElement('div');
    message_avatar.className = w['message-avatar'];

    const message_avatar_image = document.createElement('img');
    console.log(username);
    message_avatar_image.className = w['message-avatar__image'];
    message_avatar_image.src = 'http://localhost:3001/images/' + pict;
    message_avatar_image.alt = 'avatar';
    message_avatar.appendChild(message_avatar_image);
    message.appendChild(message_avatar);

    const message_content = document.createElement('div');
    message_content.className = w['message-content'];

    const username_div = document.createElement('div');
    username_div.className = w['message-content__username'];

    const anchor = document.createElement('a');
    anchor.className = w['link-to-user'];
    anchor.href = '/' + username;
    anchor.innerText = username;
    username_div.appendChild(anchor);

    const small = document.createElement('small');
    small.className = w['current-time'];
    small.innerText = time;
    username_div.appendChild(small);

    message_content.appendChild(username_div);

    const message_text = document.createElement('div');
    message_text.className = w['message-content__text'];
    message_text.innerText = text;
    message_content.appendChild(message_text);
    message.appendChild(message_content);

    document.querySelector('[data-messages]').append(message);
};

export default Watchroom;
