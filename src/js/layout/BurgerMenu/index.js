import React from 'react';

require('./burger.styl');

export class BurgerMenuButton extends React.Component {
    render() {
        return (
            <div className="burger-menu-button only-small-screen" onClick={ this.props.clickHandler }>
                <img src={ require('./burger.svg') }/>
            </div>
        );
    }
}

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    toggle() {
        console.info("Toggle");
        if (this.state.visible == true) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        console.info("SHOW");
        this.setState({visible: true});
        //document.addEventListener("click", this.hide.bind(this));
    }

    hide() {
        console.info("HIDE");
        //document.removeEventListener("click", this.hide.bind(this));
        this.setState({visible: false});
    }

    render() {
        return (
            <div className={"offCanvasMenu " + (this.state.visible ? "visible " : "") } onClick={ this.hide.bind(this) }>
                {this.props.children}
            </div>
        );
    }
}
