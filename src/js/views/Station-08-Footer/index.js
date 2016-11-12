import React from "react";
import {Link} from 'react-scroll';
require('./main.styl');

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="footer wide content-container">
                <div className="footer__row">
                    <div className="footer__column col1">
                        <img src={require('./images/mobility-hacks-ci-logo.svg')}/>
                    </div>
                    <div className="footer__column col2">
                        <h1>sitemap</h1>
                        <div className="footer__list">
                            <Link spy={true} smooth={true} to="home">Home</Link>
                            <Link spy={true} smooth={true} to="get-your-ticket">Tickets</Link>
                            <Link spy={true} smooth={true} to="why-mobility">Why Mobility</Link>
                            <Link spy={true} smooth={true} to="sponsors">Sponsors</Link>
                            <Link spy={true} smooth={true} to="prizes">Prizes</Link>
                            <Link spy={true} smooth={true} to="prizes">Jury</Link>
                            <Link spy={true} smooth={true} to="schedule">Schedule</Link>
                            <Link spy={true} smooth={true} to="faq">FAQ</Link>
                            <Link spy={true} smooth={true} to="faq">Organizers</Link>
                            <a href="http://www.hackerstolz.de/impressum/">Impressum</a>
                        </div>
                    </div>
                    <div className="footer__column col3">
                        <h1>partners</h1>
                        <div className="footer__list">
                            <a href="" target="_blank">BVG</a>
                            <a href="" target="_blank">Ergo</a>
                            <a href="" target="_blank">Europcar</a>
                            <a href="" target="_blank">IBM</a>
                            <a href="" target="_blank">Porsche</a>
                            <a href="" target="_blank">Vector</a>
                            <a href="" target="_blank">Roland Berger</a>
                            <a href="" target="_blank">Spielfeld Digital Hub</a>
                            <a href="" target="_blank">Bitkom</a>
                            <a href="" target="_blank">GraphCool</a>
                            <a href="" target="_blank">otp</a>
                            <a href="" target="_blank">Emio</a>
                            <a href="" target="_blank">Minodes</a>
                            <a href="" target="_blank">Veltins</a>
                        </div>
                    </div>
                    <div className="footer__column col4">
                        <h1>initiators</h1>
                        <div className="footer__list">
                            <a href="http:">HackerStolz e.V.</a>
                            <a href="mailto:info@hackerstolz.de">info@hackerstolz.de</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="footer__second-row">
                        <h1>Join us at Spielfeld Digital Hub in Berlin on dec 03 - 04 and create awesome hacks to lead in the digital direction.</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
