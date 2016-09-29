import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'Friday get together - Saturday Code Start<br />' +
    'Sunday Presentations & Celebrations';

class ModalView extends React.Component {
    render() {
        return (
            <div className="schedule content-container">
                <Modal
                    header='Station 6'
                    title='Schedule'
                    titletext={titletext}

                >
                    <h1>tbd.</h1>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
