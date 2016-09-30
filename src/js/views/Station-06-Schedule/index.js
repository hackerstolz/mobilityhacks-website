import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'Friday get together - Saturday Code Start<br />' +
    'Sunday Presentations & Celebrations';

class ModalView extends React.Component {
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
                                <p>Get Together 8pm</p>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="jury__fieldset">
                        <legend>Saturday Dec 3</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <p>Kickstart at 11 am</p>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="jury__fieldset">
                        <legend>Sunday Dec 4</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <p>Stop 12pm</p>
                                <p>Presentation 2pm</p>
                                <p>Ceremony 3:30pm</p>
                            </div>
                        </div>
                    </fieldset>


                </Modal>
            </div>
        );
    }
}

export default ModalView;
