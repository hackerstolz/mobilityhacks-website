import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

const titletext = 'In younger days they were the big brothers buying<br />' +
    'us alcohol because we were too young. Now we call<br />' +
    'them Sponsors because we’re too broke.';

class ModalView extends React.Component {
    render() {
        return (
            <div className="sponsors content-container">
                <Modal
                    header='Station 5'
                    title='Sponsors'
                    titletext={titletext}
                >
                    <fieldset className="fieldset">
                        <legend>first class</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image" style={{height: "140px"}} src={require('./img/IBM.png')}/>
                                </div>
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./img/BVG.png')}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Business class</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    More to come.
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>economy class</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    More to come.
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>travel buddy</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image"
                                         style={{"max-height": "80px"}}
                                         src={require('./img/roland-berger-logo.png')}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>location sponsor</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./img/Spielfeld.png')}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend>partner</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image"
                                         style={{"max-height": "80px"}}
                                         src={require('./img/bitkom.png')}/>
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
