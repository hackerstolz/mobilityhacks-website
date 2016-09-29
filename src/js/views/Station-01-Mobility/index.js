import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'Watching the change driving by while waiting for<br />' +
    'the bus is not as good as changing mobility itself.<br />' +
    'Hop on and create incredible prototypes that help<br />' +
    'forming the vision of furture mobility!';

class ModalView extends React.Component {
    render() {
        return (
            <div className="modal content-container">
                <Modal
                    header='Station 1'
                    title='Why Mobility?'
                    titletext={titletext}

                >
                    <div className="small-button">OK</div>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
