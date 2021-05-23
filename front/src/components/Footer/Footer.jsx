import f from './Footer.module.css';

import logo from './../../images/logo-md.png';
import telegram from './../../images/telegram.png';
import twitter from './../../images/twitter.png';
import instagram from './../../images/inst.png';
import link from './../../images/link.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={f['footer-wrapper']}>
                    <div className={f['footer-logo']}>
                        <img
                            className={f['footer-logo__image']}
                            src={logo}
                            alt="logo"
                        />
                        <div className={f['footer-title']}>MoviePlaza</div>
                    </div>

                    <div className={f['footer-description']}>
                        Created in 2021 by MoviePlaza Teams. All rights reserved
                        and confirmed.
                    </div>

                    <div className={f['contacts-wrapper']}>
                        <div className={f['contact-title']}>Useful links</div>
                        <div className={f.contacts}>
                            <div className={f['contacts-link']}>
                                <a href="/" className={f.telegram}>
                                    <div className={f['contact-image']}>
                                        <img
                                            className={f.link_img}
                                            src={telegram}
                                            alt="telegram"
                                        ></img>
                                    </div>
                                    <div>telegram</div>
                                </a>
                            </div>
                            <div className={f['contacts-link']}>
                                <a href="/" className={f.instagram}>
                                    <div className={f['contact-image']}>
                                        <img
                                            className={f.link_img}
                                            src={instagram}
                                            alt="instagram"
                                        ></img>
                                    </div>
                                    <div>instagram</div>
                                </a>
                            </div>
                            <div className={f['contacts-link']}>
                                <a href="/" className={f.link}>
                                    <div className={f['contact-image']}>
                                        <img
                                            className={f.link_img}
                                            src={link}
                                            alt="linkin"
                                        ></img>
                                    </div>
                                    <div>linkin</div>
                                </a>
                            </div>
                            <div className={f['contacts-link']}>
                                <a href="/" className={f.twitter}>
                                    <div className={f['contact-image']}>
                                        <img
                                            className={f.link_img}
                                            src={twitter}
                                            alt="twitter"
                                        ></img>
                                    </div>
                                    <div>twitter</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
