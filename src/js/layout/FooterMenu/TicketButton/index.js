import React from 'react';
import {Link} from 'react-router';

require('./ticket-button.styl');

export default class TicketButton extends React.Component {
    render() {
        return (
            <div className="ticket-button">
                <Link to="get-your-ticket" className="ticket-button-link" activeClassName="link--active">Get a ticket</Link>
            </div>
        );
    }
}
