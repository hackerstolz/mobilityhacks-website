import React from 'react';

export default class TicketButton extends React.Component {
    render() {
        return (
            <div className="ticket-button">
                <a href="//www.eventbrite.co.uk/e/mobilityhacks-hackathon-about-the-future-of-mobility-tickets-27795158066" target="_blank">
                    <img className="ticket-button__image" src={require('./ticket_button.svg')}/>
                </a>
            </div>
        );
    }
}
