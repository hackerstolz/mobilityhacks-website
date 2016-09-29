import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

class ModalView extends React.Component {
    render() {
        return (
            <div className="jury content-container">
                <Modal
                    header='Station 3'
                    title='Jury'
                    titletext='A little less fatal than in circus maximus.<br />But berely a pinch.'
                >
                    <fieldset className="jury__fieldset">
                        <legend>Jury members</legend>
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
            </
                div >
        )
            ;
    }
}

export default ModalView;
