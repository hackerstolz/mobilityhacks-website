import React from 'react';
import Footer from './FooterMenu/Footer';

require('./layout.styl');
require('./background.styl');
require('./background.svg');

class AppLayout extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <div className="ticket-button">
                    <img className="ticket-button__image" src={require('./ticket_button.svg')}/>
                </div>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default AppLayout;
