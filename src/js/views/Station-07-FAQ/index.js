import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'Friday get together - Saturday Code Start<br />' +
    'Sunday Presentations & Celebrations';

class ModalView extends React.Component {
    render() {
        return (
            <div className="faq content-container">
                <Modal
                    header='Station 7'
                    title='FAQ'
                    titletext={titletext}
                >
                </Modal>
            </div>
        );
    }
}

export default ModalView;
