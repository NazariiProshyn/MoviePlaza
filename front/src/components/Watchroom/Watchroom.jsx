
import w from './Watchroom.module.css';
import user_img from '../../images/user.png';


function Watchroom(params) {
    return (
        <div className={w.watchroom}>
            <div className={w['watchroom-player']}></div>
            <div className={w['watchroom-chat']}>
                <div className={w['chat-buttons']}>
                    <button className={w['chat-buttons__copy']} type="button">Скопировать ссылку</button>
                </div>

                <div className={w['chat-messages']}>
                    <div className={w.message}>
                        <div className={w['message-avatar']}>
                            <img className={w['message-avatar__image']} src={user_img} alt="avatar"/>
                        </div>
                        <div className={w['message-content']}>
                            <div className={w['message-content__username']}>
                                <a className={w['link-to-user']} href="/">username</a>
                                <small className={w['current-time']}>22:50</small>
                            </div>
                            <div className={w['message-content__text']}>message text</div>
                        </div>
                    </div>
                </div>

                <div className={w['chat-input']}>
                    <input className={w['chat-input__input']} type="text" placeholder="Введите сообщение" data-emojiable="converted"></input>
                    <button className={w['chat-input__send']} type="button">Отправить</button>
                </div>          
            </div>
        </div>
    );
}

export default Watchroom;
