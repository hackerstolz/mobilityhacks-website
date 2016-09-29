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
                    titletext='You need a ticket first. Talk to evenbrite at the counter.'
                >
                    <iframe src="//eventbrite.co.uk/tickets-external?eid=27795158066&ref=etckt"
                            frameborder="0"
                            height="600"
                            width="100%"
                            vspace="0"
                            hspace="0"
                            marginheight="5"
                            marginwidth="5"
                            scrolling="auto"
                            allowtransparency="true">

                    </iframe>
                </Modal>
            </div>

        )
    }
}

export default GetYourTicket;
