import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

const titletext = 'Friday get together - Saturday Code Start<br />' +
    'Sunday Presentations & Celebrations';

import data from'./faq-data.js';

const OneFaq = ({data}) => {
    return (
        <div key={data.id} className="one-faq">
            <p>{data.header}</p>
            <p>{data.text}</p>
        </div>
    );
};

function renderFaq(datas) {
    if (datas.length > 0) {
        return datas.map((data, index) => (
            <OneFaq key={index} data={data}/>
        ));
    }
    else return [];
}

class ModalView extends React.Component {
    render() {
        const elements = renderFaq(data);

        return (
            <div className="faq content-container">
                <Modal
                    header='Station 7'
                    title='FAQ'
                    titletext={titletext}
                >
                    {elements}
                </Modal>
            </div>
        );
    }
}

export default ModalView;
