import React from 'react';
require('./tile.styl');

class Tile extends React.Component {
    render() {
        return (
            <div className="tile">
                <div className="tile__title">{this.props.title}</div>
                <img className="tile__image" src={ require(this.props.imageSrc) }/>
            </div>
        );
    }
}

export default Tile;