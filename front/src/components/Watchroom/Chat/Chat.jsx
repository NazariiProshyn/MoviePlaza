import c from './Chat.module.css';
import user_img from '../../../images/user.png';

function Chat(params) {
    return (
        <div className={c['watchroom-chat']}>
            <div className={c['chat-buttons']}>
                <button className={c['chat-buttons__copy']} type="button">Скопировать ссылку</button>
            </div>

            <div className={c['chat-messages']}>
                <div className={c.message}>
                    <div className={c['message-avatar']}>
                        <img className={c['message-avatar__image']} src={user_img} alt="avatar"/>
                    </div>
                    <div className={c['message-content']}>
                        <div className={c['message-content__username']}>
                            <a className={c['link-to-user']} href="/">username</a>
                            <small className={c['current-time']}>22:50</small>
                        </div>
                        <div className={c['message-content__text']}>message text</div>
                    </div>
                </div>
            </div>

            <div className={c['chat-input']}>
                <input className={c['chat-input__input']} type="text" placeholder="Введите сообщение" data-emojiable="converted"></input>
                <button className={c['chat-input__send']} type="button">Отправить</button>
            </div>          
        </div>
    );
}

export default Chat;