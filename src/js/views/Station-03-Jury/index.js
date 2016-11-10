import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

const titletext = 'A little less fatal than in circus maximus.<br />' +
    'But berely a pinch.';

class ModalView extends React.Component {
    render() {
        return (
            <div id="jury" className="jury content-container">
                <Modal
                    header='Station 3'
                    title='Jury'
                    titletext={titletext}
                >

                    <fieldset className="fieldset">
                        <legend>Jury members</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                            </div>
                        </div>
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
