import React from "react";
require('./main.styl');

class StayAway extends React.Component {
    render() {
        return (
            <div className="stayaway-container">
                <div className="stayaway-item">
                    <img src={require('./img/mario.svg')}/>
                    <div className="stayaway-desc">Boring Mario K.O. Championship</div>
                </div>
                <div className="stayaway-item">
                    <img src={require('./img/girls.svg')}/>
                    <div className="stayaway-desc">Supported by Girl Hacker Groups</div>
                </div>
                <div className="stayaway-item" id="specialitem">
                    <img id="line1" src={require('./img/line.svg')}/>
                    <div className="special">Reasons to stay away</div>
                    <img id="line2" src={require('./img/line.svg')}/>
                </div>
                <div className="stayaway-item">
                    <img src={require('./img/beer.svg')}/>
                    <div className="stayaway-desc">Unhealthy
                        craft beer + tasting
                    </div>
                </div>
                <div className="stayaway-item">
                    <img src={require('./img/prize.svg')}/>
                    <div className="stayaway-desc">Badly made Challenge
                        Prize Trophies
                    </div>
                </div>
            </div>
        );
    }
}

export default StayAway;
