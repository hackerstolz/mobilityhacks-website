import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

const titletext = 'The reason you\'re coming for - the money.<br />' +
    'Who are we to judge. Oh sh*t we have to judge.';

class ModalView extends React.Component {
    render() {
        return (
            <div className="prizes content-container">
                <Modal
                    header='Station 2'
                    title='Prizes & Criteria'
                    titletext={titletext}
                >
                    <fieldset className="fieldset">
                        <legend>MAIN PRIZES</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./prizes.png')}/>
                                    <p className="image-text">1. Prize</p>
                                    <p className="image-text">2000 €</p>
                                </div>
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./prizes.png')}/>
                                    <p className="image-text">2. Prize</p>
                                    <p className="image-text">1000€</p>
                                </div>
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./prizes.png')}/>
                                    <p className="image-text">3. Prize</p>
                                    <p className="image-text">500€</p>
                                </div>
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./prizes.png')}/>
                                    <p className="image-text">Audience Award</p>
                                    <p className="image-text">Best Goddies Ever</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Challenge prizes</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./IBM.png')}/>
                                    <p className="image-text">IBM Challenge</p>
                                    <p className="image-text">TBA.</p>
                                </div>
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./BVG.png')}/>
                                    <p className="image-text">BVG Challenge</p>
                                    <p className="image-text">TBA.</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Criteria</legend>
                        <div className="fieldset__container fieldset__container--criteria">
                            <div className="fieldset__container-wrapper">
                                <p><span className="percent-text">10%</span> Luck</p>
                                <p><span className="percent-text">20%</span> Skill</p>
                                <p><span className="percent-text">15%</span> Concentrated Power of Will</p>
                                <p><span className="percent-text">5%</span> Pleasure</p>
                                <p><span className="percent-text">50%</span> Pain</p>
                                <p><span className="percent-text">100%</span> Reason to join Hackerstolz</p>
                            </div>
                        </div>
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
