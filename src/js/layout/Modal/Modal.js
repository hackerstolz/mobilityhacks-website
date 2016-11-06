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
                        <div className="modal__header__item left">
                            <div className="left-arrow" onClick={ this.leftClick.bind(this) }>
                                <img src={ require('./img/left-arrow.svg') }/>
                            </div>
                            <div className="right-arrow" onClick={ this.rightClick.bind(this) }>
                                <img src={ require('./img/right-arrow.svg') }/>
                            </div>
                        </div>
                        <div className=" modal__header__item center">
                            { this.props.header }
                        </div>
                        <div className=" modal__header__item right">
                            <Link to=" home" activeClassName=" link--active">
                                <img className=" not-xs" src={ require('./img/star.svg') }/>
                            </Link>
                        </div>
                    </div>
                    <div className=" modal__title">
                        <p className=" modal__title--header">{ this.props.title }</p>
                        <p className=" modal__title--text"
                           dangerouslySetInnerHTML={ {__html: this.props.titletext} }/>
                    </div>
                    <div className=" modal__content">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
