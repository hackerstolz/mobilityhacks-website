import React from 'react';
import {Router, Link, browserHistory} from 'react-router';

require('./modal.styl');


class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    leftClick() {
        window.history.back();
    }

    rightClick() {

    }

    render() {
        return (
            <div id="modal" className="content-container">
                <div className="modal-content ">
                    <div className="modal__header">
                        <div className="modal__header__item left" onClick={ this.leftClick.bind(this) }>
                            <img src={ require('./left-arrow.svg') }/>
                        </div>
                        <div className="modal__header__item center">
                            { this.props.header }
                        </div>
                        <div className="modal__header__item right">
                            <Link to="home" activeClassName="link--active">
                                <img src={ require('./star.svg') }/>
                            </Link>
                        </div>
                    </div>
                    <div className="modal__title">
                        <p className="modal__title--header">{ this.props.title }</p>
                        <p className="modal__title--text"
                           dangerouslySetInnerHTML={ {__html: this.props.titletext} }/>
                    </div>
                    <div className="modal__content">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
