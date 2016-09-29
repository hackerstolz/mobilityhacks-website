import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'Why us, I don\'t know. ll';

class ModalView extends React.Component {
    render() {
        return (
            <div className="modal content-container">
                <Modal
                    header='Station 4'
                    title='Organizers'
                    titletext={titletext}
                >
                    <fieldset className="jury__fieldset">
                        <legend>Organizers</legend>
                        <div className="jury__fieldset__container">
                            <div className="jury__fieldset__container-wrapper">
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Ben Dover</p>
                                    <p className="jury-text">IBM, University of berlin</p>
                                    <p className="jury-text">Business judge</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Ben Dover</p>
                                    <p className="jury-text">IBM, University of berlin</p>
                                    <p className="jury-text">Business judge</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Ben Dover</p>
                                    <p className="jury-text">IBM, University of berlin</p>
                                    <p className="jury-text">Business judge</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Ben Dover</p>
                                    <p className="jury-text">IBM, University of berlin</p>
                                    <p className="jury-text">Business judge</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Ben Dover</p>
                                    <p className="jury-text">IBM, University of berlin</p>
                                    <p className="jury-text">Business judge</p>
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
