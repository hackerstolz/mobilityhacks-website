import React from 'react';

require('./modal.styl');


class Modal extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {visible: false};
        this.leftClick.bind(this);
        this.rightClick.bind(this);
        this.exitClick.bind(this);
    }

    leftClick() {

    }

    rightClick() {

    }

    exitClick() {

    }

    render() {
        return (
            <div id="modal" className="content-container">
                <div className="modal-content ">
                    <div className="modal__header">
                        <div className="modal__header__item left" onClick={ this.leftClick() }>
                            <img src={ require('./left-arrow.svg') }/>
                        </div>
                        <div className="modal__header__item center">
                            { this.props.header }
                        </div>
                        <div className="modal__header__item right" onClick={ this.exitClick() }>
                            <img src={ require('./star.svg') }/>
                        </div>
                    </div>
                    <div className="modal__title">
                        <p className="modal__title--header">{ this.props.title }</p>
                        <p className="modal__title--text"
                           dangerouslySetInnerHTML={ {__html: this.props.titletext} }/>
                    </div>
                    <div className="modal__content">

                        <fieldset>
                            <legend>Jury members</legend>
                            asdf
                        </fieldset>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
