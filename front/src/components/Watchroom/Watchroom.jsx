import React, { useEffect } from 'react';
import w from './Watchroom.module.css';

import user_img from '../../images/user.png';
import Player from './Player/Player';

import { io } from 'socket.io-client';

function Watchroom(params) {
    const ENDPOINT = 'localhost:3001';

    useEffect(() => {
        const socket = io.connect(ENDPOINT);
        socket.on('connect', () => {
            console.log(`Client connected: ${socket.id}`);
        });

        socket.on('chat_message', (username, text) => {
            const today = new Date();
            const time = today.getHours() + ':' + today.getMinutes();

            const message = document.createElement('div');
            message.className = w.message;

            const message_avatar = document.createElement('div');
            message_avatar.className = w['message-avatar'];

            const message_avatar_image = document.createElement('img');
            message_avatar_image.className = w['message-avatar__image'];
            message_avatar_image.src = user_img;
            message_avatar_image.alt = 'avatar';
            message_avatar.appendChild(message_avatar_image);
            message.appendChild(message_avatar);

            const message_content = document.createElement('div');
            message_content.className = w['message-content'];

            const username_div = document.createElement('div');
            username_div.className = w['message-content__username'];

            const anchor = document.createElement('a');
            anchor.className = w['link-to-user'];
            anchor.href = '/';
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

            console.log(text);
        });

        document.getElementById('chat-button').onclick = () => {
            const text = document.getElementById('chat-input').value;
            document.getElementById('chat-input').value = '';
            socket.emit('chat_message', text);
        };

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    }, [ENDPOINT]);

    return (
        <div className={w.watchroom}>
            <Player />
            <div className={w['watchroom-chat']}>
                <div className={w['chat-buttons']}>
                    <button className={w['chat-buttons__copy']} type="button">
                        Скопировать ссылку
                    </button>
                </div>

                <div
                    className={w['chat-messages']}
                    data-messages="messages-holder"
                >
                    <div className={w.message}>
                        <div className={w['message-avatar']}>
                            <img
                                className={w['message-avatar__image']}
                                src={user_img}
                                alt="avatar"
                            />
                        </div>
                        <div className={w['message-content']}>
                            <div className={w['message-content__username']}>
                                <a className={w['link-to-user']} href="/">
                                    username
                                </a>
                                <small className={w['current-time']}>
                                    22:50
                                </small>
                            </div>
                            <div className={w['message-content__text']}>
                                message text
                            </div>
                        </div>
                    </div>
                </div>

                <div className={w['chat-input']}>
                    <input
                        className={w['chat-input__input']}
                        type="text"
                        placeholder="Введите сообщение"
                        data-emojiable="converted"
                        id="chat-input"
                    ></input>
                    <button
                        className={w['chat-input__send']}
                        type="button"
                        id="chat-button"
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Watchroom;