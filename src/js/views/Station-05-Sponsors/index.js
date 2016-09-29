import React from 'react';
import Modal from '../../layout/Modal/Modal';

class ModalView extends React.Component {
    render() {
        return (
            <div className="modal content-container">
                <Modal
                    header='Station 5'
                    title='Sponsors'
                    titletext='A little less fatal than in circus maximus.<br />But berely a pinch.'
                >
                    <h1>TEXT</h1>
                    <fieldset>
                        <legend>Jury members</legend>
                        asdf
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
