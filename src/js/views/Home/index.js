import React from 'react';
import {Link} from 'react-router';
import TicketButton from '../../layout/FooterMenu/TicketButton'
require('./main.styl');

class Home extends React.Component {
    render() {
        return (
            <div className="content-container home">
                <div  className="startseite-logo__container">
                        <img className="startseite-logo__img_br" src={require('./img/splash_icon_background.svg')}/>
                        <div className="startseite-logo__img_wrap">
                            <img className="startseite-logo__img" src={require('./img/mobility_logo.svg')}/>
                            <div className="startseite-logo__button">
                              <TicketButton />
                            </div>
                        </div>
                </div>

                <div className="home__teaser-text">
                    <ul>
                        <li>
                            date:<br />
                            saturday, 03/12/16<br />
                            sunday, 04/12/16
                        </li>
                        <li>
                            location:<br />
                            spielfeld digital hub<br />
                            skalitzer str. 85/86<br />
                            10993 berlin
                        </li>

                        <li className="hidden">
                            <Link to="get-your-ticket">tickets</Link>:<br />
                        </li>
                        <li className="hidden">
                            this hackathon is<br />
                            organized by <a href="http://www.hackerstolz.de" target="_blank">hackerstolz</a><br />
                            <div className="home__social-icons">
                                <a href="https://www.facebook.com/events/842521752516067/" target="_blank">
                                    <img className="social-icon--facebook" src={require('./social-icons/facebook.svg')}/>
                                </a>
                                <a href="https://youtu.be/R8myY9XjiN0" target="_blank">
                                    <img className="social-icon--youtube" src={require('./social-icons/youtube.svg')}/>
                                </a>
                                <a href="https://github.com/hackerstolz" target="_blank">
                                    <img className="social-icon--github" src={require('./social-icons/github.svg')}/>
                                </a>
                                <a href="https://twitter.com/hackerstolz" target="_blank">
                                    <img className="social-icon--twitter" src={require('./social-icons/twitter.svg')}/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
