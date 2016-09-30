import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'The reason you\'re coming for - the money.<br />' +
    'Who are we to judge. Oh sh*t we have to judge.';

class ModalView extends React.Component {
    render() {
        return (
            <div className="modal content-container">
                <Modal
                    header='Station 2'
                    title='Prizes & Criteria'
                    titletext={titletext}
                >
                    <fieldset className="jury__fieldset">
                        <legend>MAIN PRIZES</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./prizes.png')}/>
                                    <p className="jury-text">1. Prize</p>
                                    <p className="jury-text">???</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./prizes.png')}/>
                                    <p className="jury-text">2. Prize</p>
                                    <p className="jury-text">???</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./prizes.png')}/>
                                    <p className="jury-text">3. Prize</p>
                                    <p className="jury-text">???</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="jury__fieldset">
                        <legend>Challenge prizes</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./IBM.png')}/>
                                    <p className="jury-text">IBM Challenge</p>
                                    <p className="jury-text">TBA.</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./BVG.png')}/>
                                    <p className="jury-text">BVG Challenge</p>
                                    <p className="jury-text">TBA.</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./SAP.png')}/>
                                    <p className="jury-text">SAP Challenge</p>
                                    <p className="jury-text">TBA.</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Criteria</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <p>10% Luck</p>
                                <p>20% Skill</p>
                                <p>15% Concentrated Power of Will</p>
                                <p>5% Pleasure</p>
                                <p>50% Pain</p>
                                <p>100% Reason to join Hackerstolz</p>
                            </div>
                        </div>
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
