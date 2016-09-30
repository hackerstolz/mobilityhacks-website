import React from 'react';
import {Link} from 'react-router';

import Footer from './FooterMenu/Footer';
import TicketButton from './TicketButton/ticket-button';

require('./layout.styl');
require('./background.svg');

class AppLayout extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <TicketButton />
                <img className="circle-left" src={require('./kreis_links.svg')}/>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default AppLayout;
