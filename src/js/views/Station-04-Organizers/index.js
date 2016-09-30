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
                                    <p className="jury-name">Frederik Chettouh</p>
                                    <p className="jury-text">Sponsors, Service, Moderation</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Alexander Müller</p>
                                    <p className="jury-text">Finance, Moderation, Planning</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Özden Gelgeç</p>
                                    <p className="jury-text">Identity, Interior Design</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Sebastian Waschnick</p>
                                    <p className="jury-text">Tech Partnerships, Website</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Iris Bröse</p>
                                    <p className="jury-text">Sponsors, Planning, Interior, Catering</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Niko Ring</p>
                                    <p className="jury-text">Sponsors, Tech Partnerships, Infrastructure</p>
                                </div>
                                <div className="jury-member">
                                    <img className="jury-head" src={require('./jury-head.png')}/>
                                    <p className="jury-name">Daniel Seiler</p>
                                    <p className="jury-text">Identity</p>
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
