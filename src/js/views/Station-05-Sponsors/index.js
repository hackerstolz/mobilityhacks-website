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
                    <fieldset className="jury__fieldset">
                        <legend>GOLD Sponsors</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./IBM.png')}/>
                                    <p className="jury-text">1. Prize</p>
                                    <p className="jury-text">???</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./BVG.png')}/>
                                    <p className="jury-text">2. Prize</p>
                                    <p className="jury-text">???</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="jury__fieldset">
                        <legend>Sponsors</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./SAP.png')}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="jury__fieldset">
                        <legend>Partners</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./Spielfeld.png')}/>
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
