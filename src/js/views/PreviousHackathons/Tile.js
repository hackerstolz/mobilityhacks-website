import React from 'react';
require('./tile.styl');

class Tile extends React.Component {
    render() {
        if (this.props.imageSrc) {
            return (
                <div className="tile">
                    <div className="tile__title">{this.props.title}</div>

                    <img className="tile__image" src={ require(this.props.imageSrc) }/>
                </div>
            );
        }
        else {
            return (
                <div className="tile">
                    <div className="tile__title">{this.props.title}</div>
                    <div>{this.props.text}</div>
                </div>
            );
        }
    }
}

export default Tile;