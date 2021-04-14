import React, { useEffect } from 'react';
import w from './Watchroom.module.css';

import user_img from '../../images/user.png';

import { io } from 'socket.io-client';

const Watchroom = (params) => {
    const ENDPOINT = 'localhost:3001';
    useEffect(() => {
        const socket = io.connect(ENDPOINT);
        const video = document.getElementById('videoPlayer');
        const room = window.location.pathname.substr(6);
        const username = 'Guest';

        socket.emit('join_room', { username, room });

        socket.on('message', (message) => console.log(message));

        socket.on('connect', () =>
            console.log(`Client connected: ${socket.id}`)
        );

        // send message to chat
        socket.on('chat_message', (username, text) =>
            createMessage(username, text)
        );

        document.getElementById('chat-button').onclick = () => {
            const text = document.getElementById('chat-input').value;
            document.getElementById('chat-input').value = '';
            socket.emit('chat_message', text);
        };

        // play video
        socket.on('play_video', () => {
            if (video.pause) {
                video.play();
            }
        });
        video.addEventListener('play', () => {
            socket.emit('play_video');
        });

        // stop video
        socket.on('stop_video', () => {
            if (!video.pause) {
                video.pause();
            }
        });
        video.addEventListener('pause', () => {
            socket.emit('stop_video');
        });

        // change video time
        socket.on('change_time', (time) => {
            if (
                video.currentTime !== time &&
                Math.abs(video.currentTime - time) >= 0.5
            ) {
                video.currentTime = time;
            }
        });
        video.addEventListener('seeked', () => {
            video.pause();
            socket.emit('seeked', video.currentTime);
        });

        // disconnect
        socket.on('disconnect', () => console.log('Client disconnected'));
    }, [ENDPOINT]);

    return (
        <div className={w.watchroom}>
            <div className={w['watchroom-player']}>
                <video className={w['video']} id="videoPlayer" controls>
                    <source src="http://localhost:3001/videos/testvideo.mp4" />
                </video>
            </div>
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
};

const createMessage = (username, text) => {
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
};

export default Watchroom;
