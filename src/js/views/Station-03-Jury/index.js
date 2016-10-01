import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

const titletext = 'A little less fatal than in circus maximus.<br />' +
    'But berely a pinch.';

class ModalView extends React.Component {
    render() {
        return (
            <div className="jury content-container">
                <Modal
                    header='Station 3'
                    title='Jury'
                    titletext={titletext}
                >

                    <fieldset className="fieldset">
                        <legend>Jury members</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./jury-head.png')}/>
                                    <p className="image-text-title">Max Mustermann</p>
                                    <p className="image-text">Big Company, University of Berlin</p>
                                    <p className="image-text">Business judge</p>
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
