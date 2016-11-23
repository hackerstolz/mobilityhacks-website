import React from "react";
import {Link} from "react-scroll";
require('./main.styl');

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="footer wide content-container">
                <div className="footer__row">
                    <div className="footer__column col1">
                        <img src={require('./images/mobility-hacks-ci-logo.svg')}/>
                    </div>
                    <div className="footer__column col2 col-with-text not-xs">
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
                    <div className="footer__column col3 col-with-text not-xs">
                        <h1>partners</h1>
                        <div className="footer__list">
                            <a href="http://www.bvg.de" target="_blank">BVG</a>
                            <a href="https://www.ergo.de" target="_blank">Ergo</a>
                            <a href="https://www.europcar.com" target="_blank">Europcar</a>
                            <a href="http://www.ibm.com" target="_blank">IBM</a>
                            {/* <a href="http://www.porsche.com/" target="_blank">Porsche</a> */}
                            <a href="https://vector.com" target="_blank">Vector</a>
                            <a href="https://www.rolandberger.com" target="_blank">Roland Berger</a>
                            <a href="http://www.spielfeld.com" target="_blank">Spielfeld Digital Hub</a>
                            <a href="https://www.bitkom.org" target="_blank">Bitkom</a>
                            <a href="http://data.deutschebahn.com/" target="_blank">DB OpenData</a>
                            <a href="http://hub.lh.com" target="_blank">Lufthansa Innovation Hub</a>
                            <a href="https://graph.cool" target="_blank">GraphCool</a>
                            <a href="http://www.otp.systems" target="_blank">open telematic platform</a>
                            <a href="https://www.emio-sharing.de" target="_blank">Emio</a>
                            <a href="https://minodes.com" target="_blank">Minodes</a>
                            <a href="http://www.veltins.de" target="_blank">Veltins</a>
                        </div>
                    </div>
                    <div className="footer__column col4 col-with-text not-xs">
                        <h1>initiators</h1>
                        <div className="footer__list">
                            <a href="http://www.hackerstolz.de" target="_blank">HackerStolz e.V.</a>
                            <a href="mailto:info@hackerstolz.de">info@hackerstolz.de</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="footer__second-row">
                        <h1>Join us at Spielfeld Digital Hub in Berlin on dec 03 - 04 and create awesome hacks to lead mobility in the right direction.</h1>
                    </div>
                </div>
                <div className="only-xs">
                    <div className="footer__third-row">
                        <div className="footer__list">
                            <a href="http://www.hackerstolz.de" className="left" target="_blank">HackerStolz e.V.</a>
                            <a href="mailto:info@hackerstolz.de" className="right">info@hackerstolz.de</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
