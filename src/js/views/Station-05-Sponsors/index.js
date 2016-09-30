import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'In younger days they were the big brothers buying<br />' +
    'us alcohol because we were too young. Now we call<br />' +
    'them Sponsors because we’re too broke.';


class ModalView extends React.Component {
    render() {
        return (
            <div className="modal content-container">
                <Modal
                    header='Station 5'
                    title='Sponsors'
                    titletext={titletext}
                >
                    <fieldset className="fieldset">
                        <legend>GOLD Sponsors</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./IBM.png')}/>
                                </div>
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./BVG.png')}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Sponsors</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./SAP.png')}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>Partners</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./Spielfeld.png')}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
