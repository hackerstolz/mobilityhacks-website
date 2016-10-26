import React from 'react';
require('./main.styl');

class Home extends React.Component {
    render() {
        return (
            <div className="home content-container">
                <div className="home__hackathon-name">
                    <img className="home__hackathon-name--image" src={require('./mobility_logo_white.svg')}/>
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
                        <li>
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
