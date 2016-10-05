import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

class GetYourTicket extends React.Component {
    render() {
        return (
            <div className="get-your-ticket content-container">
                <Modal
                    header='TICKET COUNTER'
                    title='TICKET COUNTER'
                    titletext='You need a ticket first. Talk to evenbrite at the counter. <br /> <h4>Please note that you get 15€ cashback at the event!</h4>'
                >
                    <a href="//www.eventbrite.de/e/mobilityhacks-hackathon-about-the-future-of-mobility-tickets-27795158066" target="_blank">
                        <div className="small-button">Go to Eventbrite</div>
                    </a>

                    <div className="eventbrite-loading">Loading...</div>

                    <iframe src="//eventbrite.co.uk/tickets-external?eid=27795158066&ref=etckt"
                            frameBorder="1"
                            height="600"
                            width="100%"
                            Vspace="0"
                            Hspace="0"
                            marginHeight="5"
                            marginWidth="5"
                            scrolling="auto"
                            allowTransparency="true">
                    </iframe>
                </Modal>
            </div>

        )
    }
}

export default GetYourTicket;
