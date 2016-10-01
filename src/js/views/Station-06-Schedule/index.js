import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'Friday get together - Saturday Code Start<br />' +
    'Sunday Presentations & Celebrations';


const fridayEvents = [
  'Get Together 7:30pm'
];

const saturdayEvents = [
  'Registration starts at 8:30am',
  'Kick-off and challenge pitches 10am',
  'Workshops take place from 11am to 12am ',
  'Hacking starts at 12pm'
];

const sundayEvents = [
  'End of hacking at 12pm',
  'Your pitches will between 13pm and 15pm',
  'Price ceremony at 16pm'
];

class ModalView extends React.Component {

    eventTags(eventNames) {
      return eventNames.map((name, i) => <p key={i}>{name}</p>)
    }

    render() {
        return (
            <div className="schedule content-container">
                <Modal
                    header='Station 6'
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
