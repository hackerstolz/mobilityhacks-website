import React from 'react';
import Modal from './Modal';

class ModalView extends React.Component {
    render() {
        return (
            <div className="modal content-container">
                <Modal
                    header='Station 4'
                    title='Jury'
                    titletext='A little less fatal than in circus maximus.<br />But berely a pinch.'
                />
            </div>
        );
    }
}

export default ModalView;
