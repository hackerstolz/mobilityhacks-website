import React from 'react';

export class MenuListItem extends React.Component {
    navigate(hash) {
        window.location.hash = hash;
    }

    render() {
        return (
            <div className="menu-item">
                {this.props.children}
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
            <div className="menu">
                <div className={(this.state.visible ? "visible " : "") + this.props.alignment + " menu-items-container"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
