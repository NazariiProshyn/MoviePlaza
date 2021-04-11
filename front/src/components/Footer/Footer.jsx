import React, { Component } from 'react';
import f from './Footer.module.css';

import logo from './../../images/Logo.png';
import telegram from './../../images/telegram.png';
import twitter from './../../images/twitter.png';
import instagram from './../../images/inst.png';
import link from './../../images/link.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={f['footer-logo']}>
                    <img
                        className={f['footer-logo__image']}
                        src={logo}
                        alt="logo"
                    />
                    <div className={f['footer-title']}>MoviePlaza</div>
                </div>

                <div className={f['footer-description']}>
                    Created in 2021 by MoviePlaza Teams. All rights reserved and
                    confirmed. Criminal liability is provided for the creation
                    of fakes and the use of site resources. For cooperation call
                    +38000000000 or email movieplaza@gm.com
                </div>
                <div className={f.contacts}>
                    <div className={f['contact-title']}>Our Contacts</div>
                    <div className={f['contacts-link']}>
                        <a href="/" className={f.telegram}>
                            <img
                                className={f.link_img}
                                src={telegram}
                                alt="telegram"
                            ></img>
                            <div>telegram</div>
                        </a>
                    </div>
                    <div className={f['contacts-link']}>
                        <a href="/" className={f.instagram}>
                            <img
                                className={f.link_img}
                                src={instagram}
                                alt="instagram"
                            ></img>
                            <div>instagram</div>
                        </a>
                    </div>
                    <div className={f['contacts-link']}>
                        <a href="/" className={f.link}>
                            <img
                                className={f.link_img}
                                src={link}
                                alt="linkin"
                            ></img>
                            <div>linkin</div>
                        </a>
                    </div>
                    <div className={f['contacts-link']}>
                        <a href="/" className={f.twitter}>
                            <img
                                className={f.link_img}
                                src={twitter}
                                alt="twitter"
                            ></img>
                            <div>twitter</div>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
