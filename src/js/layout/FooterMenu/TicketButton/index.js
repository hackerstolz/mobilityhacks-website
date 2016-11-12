import React from 'react';
import {Link} from 'react-scroll';

require('./ticket-button.styl');

export default class TicketButton extends React.Component {
    render() {
        return (
            <div className="ticket-button">
                <Link smooth={true} to="get-your-ticket" className="ticket-button-link">Get a ticket</Link>
            </div>
        );
    }
}
