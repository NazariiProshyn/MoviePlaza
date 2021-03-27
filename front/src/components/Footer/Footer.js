import React, { Component } from 'react';
import './Footer.css';
import logo from './../../images/Logo.png';
import telegram from './../../images/telegram.png';
import twitter from './../../images/twitter.png';
import instagram from './../../images/inst.png';
import link from './../../images/link.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={logo} alt="logo" id="logofoot"></img>
                <div id="footerplaza">MoviePlaza</div>
                <div id="footerdesc">
                    Created in 2021 by MoviePlaza Teams. All rights reserved and
                    confirmed. Criminal liability is provided for the creation
                    of fakes and the use of site resources. For cooperation call
                    +38000000000 or email movieplaza@gm.com
                </div>
                <div className="contacts">
                    <div id="contacttext">Our Contacts</div>
                    <div id="telegram">
                        <img src={telegram} alt="tel" id="telImg"></img>
                        <div>user.acc</div>
                    </div>
                    <div id="instagram">
                        <img src={instagram} alt="inst" id="instImg"></img>
                        <div>user.acc</div>
                    </div>
                    <div id="link">
                        <img src={link} alt="link" id="linkImg"></img>
                        <div>user.acc</div>
                    </div>
                    <div id="twitter">
                        <img src={twitter} alt="twit" id="twitImg"></img>
                        <div>user.acc</div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
