import React from 'react';
require('./main.styl');

class Home extends React.Component {
    render() {
        return (
            <div className="home content-container">
                <div className="home__teaser-text">
                    <p>December 2016</p>
                    <p>Berlin, Germany</p>
                    <p>This is a Hackathon</p>
                    <p>by Hackerstolz.</p>
                    <p>Stay tuned.</p>
                </div>
                <div className="home__hackathon-name">
                    <p>Mobility Hacks</p>
                </div>
            </div>
        );
    }
}

export default Home;
