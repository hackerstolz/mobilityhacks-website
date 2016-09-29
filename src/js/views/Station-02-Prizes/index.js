import React from 'react';
import Modal from '../../layout/Modal/Modal';

const titletext = 'The reason you\'re coming for - the money.<br />' +
    'Who are we to judge. Oh sh*t we have to judge.';

class ModalView extends React.Component {
    render() {
        return (
            <div className="modal content-container">
                <Modal
                    header='Station 2'
                    title='Prizes & Criteria'
                    titletext={titletext}
                >
                    <fieldset>
                        <legend>Main prizes</legend>
                        asdf
                    </fieldset>
                    <fieldset>
                        <legend>Challenge Prizes</legend>
                        asdf
                    </fieldset>
                    <fieldset>
                        <legend>Criteria</legend>
                        asdf
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
