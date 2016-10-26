import React from 'react';
import {Link} from 'react-router';

import Footer from './FooterMenu/Footer';
import TicketButton from './TicketButton/ticket-button';

require('./layout.styl');
import BackgroundMap from './BackgroundMap/';
// require('./Background/background.jpg');

class AppLayout extends React.Component {

    componentDidMount() {
        this.BackgroundMap = BackgroundMap;
        console.info(this.BackgroundMap);
        this.BackgroundMap.init();
        console.info("Did mount");
    }

    handleNavigation(event) {
        var href = event.target.href;
        var location = href.substring(href.indexOf('#') + 1, href.length);
        this.Map.flyToOne(location);
    }

    render() {
        return (
            <div className="app-wrapper">
                <div className="circle__container">
                    <div className="circle-first__container">
                        <img className="circle-first" src={require('./Background/first_circle.png')}/>
                    </div>
                    <div className="circle-left__container">
                        <img className="circle-left" src={require('./Background/second_circle.svg')}/>
                    </div>
                </div>

                <TicketButton />

                {this.props.children}

                <div className="hackerstolz-logo">
                    <img className="hackerstolz-logo__img" src={require('./Background/hackerstolz-logo.svg')}/>
                </div>

                <Footer />
            </div>
        );
    }
}

export default AppLayout;
