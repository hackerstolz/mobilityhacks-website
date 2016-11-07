import React from 'react';
import {Link} from 'react-router';

export default class TicketButton extends React.Component {
    render() {
        return (
            <div className="ticket-button">
                <Link to="get-your-ticket" activeClassName="link--active">
                    <img className="ticket-button__image" src={require('./ticket_button.svg')}/>
                </Link>
            </div>
        );
    }
}
