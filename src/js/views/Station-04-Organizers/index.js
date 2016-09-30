import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'Why us, I don\'t know. ll';

class ModalView extends React.Component {
    render() {
        return (
            <div className="organizers content-container">
                <Modal
                    header='Station 4'
                    title='Organizers'
                    titletext={titletext}
                >
                    <fieldset className="fieldset">
                        <legend>Organizers</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper--big">
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./jury-head.png')}/>
                                    <p className="image-text-title">Frederik Chettouh</p>
                                    <p className="image-text">Sponsors, Service, Moderation</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./jury-head.png')}/>
                                    <p className="image-text-title">Alexander Müller</p>
                                    <p className="image-text">Finance, Moderation, Planning</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./jury-head.png')}/>
                                    <p className="image-text-title">Özden Gelgeç</p>
                                    <p className="image-text">Identity, Interior Design</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./jury-head.png')}/>
                                    <p className="image-text-title">Sebastian Waschnick</p>
                                    <p className="image-text">Tech Partnerships, Website</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./jury-head.png')}/>
                                    <p className="image-text-title">Iris Bröse</p>
                                    <p className="image-text">Sponsors, Planning, Interior, Catering</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./jury-head.png')}/>
                                    <p className="image-text-title">Nico Ring</p>
                                    <p className="image-text">Sponsors, Tech Partnerships, Infrastructure</p>
                                </div>
                                <div className="circle-image__container--big">
                                    <img className="circle-image" src={require('./jury-head.png')}/>
                                    <p className="image-text-title">Daniel Seiler</p>
                                    <p className="image-text">Identity</p>
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
