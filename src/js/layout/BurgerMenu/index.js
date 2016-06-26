import React from 'react';

require('./burger.styl');
var burgerIcon = require('./burger.svg');
var crossIcon = require('./cross.svg');


export class BurgerMenuButton extends React.Component {
    render() {
        var icon = this.props.visible ? crossIcon : burgerIcon;

        return (
            <div className="burger-menu-button only-small-screen" onClick={ this.props.clickHandler.bind(this) }>
                <img src={ icon }/>
            </div>
        );
    }
}

export class Menu extends React.Component {
    render() {
        return (
            <div className={"offCanvasMenu " + (this.props.visible ? "visible " : "") } onClick={ this.props.clickHandler.bind(this) }>
                {this.props.children}
            </div>
        );
    }
}
