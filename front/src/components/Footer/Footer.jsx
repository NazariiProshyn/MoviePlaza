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
                <img src={logo} alt="logo" id={f['footer-logo']}></img>
                <div id={f['footer-title']}>MoviePlaza</div>
                <div id={f['footer-description']}>
                    Created in 2021 by MoviePlaza Teams. All rights reserved and
                    confirmed. Criminal liability is provided for the creation
                    of fakes and the use of site resources. For cooperation call
                    +38000000000 or email movieplaza@gm.com
                </div>
                <div className={f.contacts}>
                    <div id={f['contact-title']}>Our Contacts</div>
                    <div id={f.telegram}>
                        <img src={telegram} alt="tel" id="telImg"></img>
                        <div>user.acc</div>
                    </div>
                    <div id={f.instagram}>
                        <img src={instagram} alt="inst" id="instImg"></img>
                        <div>user.acc</div>
                    </div>
                    <div id={f.link}>
                        <img src={link} alt="link" id="linkImg"></img>
                        <div>user.acc</div>
                    </div>
                    <div id={f.twitter}>
                        <img src={twitter} alt="twit" id="twitImg"></img>
                        <div>user.acc</div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
