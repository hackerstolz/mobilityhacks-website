import React from 'react';
import {Link} from 'react-router';

import Footer from './FooterMenu/Footer';
import TicketButton from './TicketButton/ticket-button';

require('./layout.styl');

class AppLayout extends React.Component {
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

                <Footer />
            </div>
        );
    }
}

export default AppLayout;
