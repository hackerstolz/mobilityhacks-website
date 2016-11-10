import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

const titletext = 'You still have some questions? Get in contact with us!';

import data from './faq-data.js';

class OneFaq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    toggle() {
        console.info("TOGGLE");
        if (this.state.visible == true) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.setState({visible: true});
    }

    hide() {
        this.setState({visible: false});
    }

    render() {
        return (
            <div key={this.props.data.id} className="faq-one">
                <div className="faq-question" onClick={ this.toggle.bind(this) }>{this.props.data.header}</div>
                <p className={"faq-text " + (this.state.visible ? "faq-text--visible " : "") } dangerouslySetInnerHTML={{__html: this.props.data.text}}></p>
            </div>
        );
    }
}


function renderFaq(datas) {
    return datas.map((data, index) => <OneFaq key={index} data={data}/>)
}

class ModalView extends React.Component {
    render() {
        const elements = renderFaq(data);

        return (
            <div id="faq" className="faq content-container">
                <Modal
                    header='Station 6'
                    title='FAQ'
                    titletext={titletext}
                >
                    <h5><i>#</i>mobilityhacks</h5>
                    <p>
                        <a href="https://www.facebook.com/events/842521752516067/"
                           className="social-link"
                           target="_blank">Facebook</a>
                        <span> | </span>
                        <a href="https://twitter.com/Hackerstolz"
                           className="social-link"
                           target="_blank">Twitter</a>
                        <span> | </span>
                        <a href="mailto:hello@mobility-hacks.de"
                           className="social-link"
                           target="_blank">Mail</a>
                    </p>

                    {elements}
                </Modal>
            </div>
        );
    }
}

export default ModalView;
