import React from 'react';
require('./main.styl');

class Home extends React.Component {
    render() {
        return (
            <div className="home content-container">
                <div className="home__hackathon-name">
                    <p className="home__hackathon-name__line1">mobility</p>
                    <p className="home__hackathon-name__line2">{'{hacks}'}</p>
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
                            skalizter str. 85/86<br />
                            10993 berlin
                        </li>
                        <li>
                            this hackathon is<br />
                            organized by <a href="http://www.hackerstolz.de" target="_blank">hackerstolz</a>.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
