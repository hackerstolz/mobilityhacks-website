import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'Friday get together - Saturday Code Start<br />' +
    'Sunday Presentations & Celebrations';


const fridayEvents = [
  'Get Together 7:30 pm'
];

const saturdayEvents = [
  'Registration starts at 8:30 am',
  'Kick-off and challenge pitches 10 am',
  'Workshops take place from 11 am to 12 am ',
  'Hacking starts at 12 pm'
];

const sundayEvents = [
  'End of hacking at 12 pm',
  'Your pitches will between 1 pm and 3 pm',
  'Price ceremony at 4 pm'
];

class ModalView extends React.Component {

    eventTags(eventNames) {
      return eventNames.map((name, i) => <p key={i}>{name}</p>)
    }

    render() {
        return (
            <div id="schedule" className="schedule content-container">
                <Modal
                    header='Station 5'
                    title='Schedule'
                    titletext={titletext}

                >
                    <fieldset className="jury__fieldset">
                        <legend>Friday Dec 2</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                {this.eventTags(fridayEvents)}
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="jury__fieldset">
                        <legend>Saturday Dec 3</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                {this.eventTags(saturdayEvents)}
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="jury__fieldset">
                        <legend>Sunday Dec 4</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                {this.eventTags(sundayEvents)}
                            </div>
                        </div>
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
