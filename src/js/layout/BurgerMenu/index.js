import React from 'react';

require('./burger.styl');
var burgerIcon = require('./burger.svg');
var crossIcon = require('./cross.svg');


export class BurgerMenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showCross: false, icon: burgerIcon};
        this.state
    }

    toggle() {
        if (this.state.showCross) {
            this.setState({showCross: false, icon: burgerIcon});
        } else {
            this.setState({showCross: true, icon: crossIcon});
        }
        this.props.clickHandler();
    }


    render() {
        return (
            <div className="burger-menu-button only-small-screen" onClick={ this.toggle.bind(this) }>
                <img src={ this.state.icon }/>
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
