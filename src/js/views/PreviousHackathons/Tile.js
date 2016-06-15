import React from 'react';

class Tile extends React.Component {
    render() {
        var className = this.props.className ? "tile " + this.props.className : "tile";

        if (this.props.imageSrc) {
            return (
                <div className={ className }>
                    <div className="tile__title">{this.props.title}</div>
                    <img className="tile__image" src={ require(this.props.imageSrc) }/>
                </div>
            );
        }
        else {
            return (
                <div className={ className }>
                    <div className="tile__title">{this.props.title}</div>
                    <div className="tile__text">{this.props.children}</div>
                </div>
            );
        }
    }
}

export default Tile;